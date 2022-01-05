import {Component, OnInit} from '@angular/core';
import {YachtService} from "../yacht/yacht.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {YachtModel} from "../yacht/yacht.model";
import {OrderModel} from "../place-order/yacht.model";

@Component({
  selector: 'app-yacht-description',
  templateUrl: './yacht-description.component.html',
  styleUrls: ['./yacht-description.component.css']
})
export class YachtDescriptionComponent implements OnInit {

  yachtId: string = '';
  public yacht: YachtModel | null = null;
  public orders: OrderModel[] = [];

  constructor(private yachtService: YachtService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.fetch(this.route.snapshot.params['id']).subscribe(
      (yacht) => {
        this.yacht = yacht;
      }
    );

    this.fetchOrders(this.route.snapshot.params['id']).subscribe(
      (orders) => {
        this.orders = orders;
      }
    )
  }

  public fetch(id: string): Observable<YachtModel> {
    return this.yachtService.getBySelectedId(Number(id))
  }

  public fetchOrders(params: string): Observable<OrderModel[]> {
    return this.yachtService.getYachtOrders(params);
  }


}
