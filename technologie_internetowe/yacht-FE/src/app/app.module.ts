import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavabarComponent } from './containers/navabar/navabar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { YachtComponent } from './components/yacht/yacht.component';
import {HttpClientModule} from "@angular/common/http";
import { YachtDescriptionComponent } from './components/yacht-description/yacht-description.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AboutComponent } from './components/about/about.component';
import { PriceComponent } from './components/price/price.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './containers/navabar/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavabarComponent,
    WelcomeComponent,
    YachtComponent,
    YachtDescriptionComponent,
    PlaceOrderComponent,
    AboutComponent,
    PriceComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
