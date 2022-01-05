import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {YachtService} from "../yacht/yacht.service";
import {ActivatedRoute, Router} from "@angular/router";
import {YachtModel} from "../yacht/yacht.model";
import {OrderModel} from "./yacht.model";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  form: FormGroup | null = null;
  private yacht: YachtModel | null = null

  constructor(private fb: FormBuilder,
              private yachtService: YachtService,
              private route: ActivatedRoute,
              private router: Router) { }

  public get price(): string {
    if(this.form?.get('from')?.value && this.form?.get('to')?.value) {
      const from = new Date(this.form?.get('to')?.value);
      const to = new Date(this.form?.get('from')?.value);

      // @ts-ignore
      return `${(Math.abs(to - from) / (36e5) * this.yacht?.price)} PLN `
    }


    return '--';
  }

  ngOnInit(): void {
    this.yachtService.getBySelectedId(this.route.snapshot.params['id'])
      .subscribe((yacht) => {
        this.yacht = yacht;
      });
    this.initForm();
  }



  private initForm(): void {
    this.form = this.fb.group({
      'email': [null, [Validators.email, Validators.required]],
      'firstName': [null, [Validators.required]],
      'lastName': [null, [Validators.required]],
      'from': [null, [Validators.required]],
      'to': [{value: null, disabled: true}, [Validators.required]],
    })
  }

  onSubmit() {
    const from = new Date(this.form?.get('to')?.value);
    const to = new Date(this.form?.get('from')?.value);



    const order: OrderModel = {
      ...this.form?.getRawValue(),
      yachtId: Number(this.route.snapshot.params['id']),
      // @ts-ignore
      price: (Math.abs(to - from) / (36e5) * this.yacht?.price)
    }

    this.yachtService.placeOrder(order).subscribe(() => {
      this.router.navigate(['description', this.route.snapshot.params['id']]);
    });
  }

  isFirstDateSelected() {
    this.form?.get('to')?.enable();
  }
}
