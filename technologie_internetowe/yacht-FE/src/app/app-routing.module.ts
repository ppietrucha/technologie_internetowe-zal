import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {YachtComponent} from "./components/yacht/yacht.component";
import {YachtDescriptionComponent} from "./components/yacht-description/yacht-description.component";
import {PlaceOrderComponent} from "./components/place-order/place-order.component";
import {AboutComponent} from "./components/about/about.component";
import {PriceComponent} from "./components/price/price.component";
import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'type/:path', component: YachtComponent},
  {path: 'description/:id', component: YachtDescriptionComponent},
  {path: 'place-order/:id', component: PlaceOrderComponent},
  {path: 'about', component: AboutComponent},
  {path: 'price', component: PriceComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
