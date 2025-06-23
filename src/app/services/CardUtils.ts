import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class CardUtils {
  constructor() {

  }  
  getLastFourDigits(cardNumber: string): string { //service class
  const digits = cardNumber.replace(/\D/g, '');
  return digits.slice(-4);
  }

  getSavedPaymentMethod() {
    return [ //initialization
      {
        type: 'Visa',
        cardNumber: '4111 1111 1111 1111'
      },
      {
        type: 'MasterCard',
        cardNumber: '5500 0000 0000 0004'
      },
      {
        type: 'American Express',
        cardNumber: '3400 0000 0000 009'
      },
      {
        type: 'PayPal',
        cardNumber: '444 4444 4444 4444'
      } 
    ];
  }
}