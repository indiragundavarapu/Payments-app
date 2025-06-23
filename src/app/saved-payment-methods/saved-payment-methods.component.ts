import { Component, OnInit } from '@angular/core';
import { CardUtils } from '../services/CardUtils';

interface PaymentMethod {
  type: string; //visa, mastercard, paypal, amex
  cardNumber: string; //full card number
}

@Component({
  selector: 'app-saved-payment-methods',
  templateUrl: './saved-payment-methods.component.html',
  styleUrls: ['./saved-payment-methods.component.scss']
})

export class SavedPaymentMethodsComponent implements OnInit {
  paymentMethods: PaymentMethod[] = []; //declaration

  constructor(private cardUtils: CardUtils) {}

  ngOnInit(): void {

    this.paymentMethods = this.cardUtils.getSavedPaymentMethod()
  }
  getMaskedCardNumber(cardNumber: string): string {
  const lastFour: string = this.cardUtils.getLastFourDigits(cardNumber)
  return `**** **** **** ${lastFour}`;
  }
}



