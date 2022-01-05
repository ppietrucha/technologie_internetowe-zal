import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {mergeMap} from "rxjs";
import {YachtService} from "./yacht.service";
import {YachtModel} from "./yacht.model";

@Component({
  selector: 'app-yacht',
  templateUrl: './yacht.component.html',
  styleUrls: ['./yacht.component.css']
})
export class YachtComponent implements OnInit {
  public yachts: YachtModel[] = [];

  public yachtType: string = '';

  constructor(private route: ActivatedRoute,
              private yachtService: YachtService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        mergeMap((params: Params) => {
          this.yachtType = params['path'];
          return this.yachtService.getSelectedYachts(this.yachtType);
        })
      ).subscribe((yachts) => {
        this.yachts = yachts;
      console.log(this.yachts);
    });
  }

  showMore() {
  }
}
