import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SavedPaymentMethodsComponent } from './saved-payment-methods/saved-payment-methods.component';

const routes: Routes = [
  {"path": "", redirectTo: "/login", pathMatch: "full" },
  {"path": "login", component: LoginComponent},
  {"path": "payment-methods", component: SavedPaymentMethodsComponent},// redirect to login page if no path is provided
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

   
}


//signup or login or dashboard or routing compnents nececssary for SPA  will be in this