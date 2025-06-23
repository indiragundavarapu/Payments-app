import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SavedPaymentMethodsComponent } from './saved-payment-methods/saved-payment-methods.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardUtils } from './services/CardUtils';

@NgModule({
  declarations: [ // declare all created components (for many compoents, create a difernet module and load it here)
    AppComponent, LoginComponent, SavedPaymentMethodsComponent
  ],
  imports: [ //can create own modules
    BrowserModule, // building module for angular
    AppRoutingModule,
    ReactiveFormsModule, //routing module for angular
  ],
  providers: [CardUtils], // loading any 3rd party libraries
  bootstrap: [AppComponent] //intial component which needs to loads first
})
export class AppModule { }
