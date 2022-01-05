import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {YachtModel} from "./yacht.model";
import {OrderModel} from "../place-order/yacht.model";

@Injectable({
  providedIn: 'root'
})
export class YachtService {

  constructor(private http: HttpClient) { }

  public getSelectedYachts(type: string): Observable<YachtModel[]> {
    return this.http.get<YachtModel[]>(`http://localhost:3000/${type}`);
  }

  public getBySelectedId(id: number): Observable<YachtModel> {
    return this.http.get<YachtModel>(`http://localhost:3000/byId/${id}`)
  }

  public placeOrder(order: any): Observable<any> {
    return this.http.post(`http://localhost:3000/place-order`, order)
  }

  public getYachtOrders(param: string): Observable<OrderModel[]> {
    return this.http.get<OrderModel[]>(`http://localhost:3000/orders/${param}`);
  }

}
