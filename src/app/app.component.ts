import { Component, OnInit } from '@angular/core';

import { BondCalculator, LoanCalculator } from 'fiscal-npm';

import { loanCalculator } from 'fincal-xx/src/loanCalculator';
import { bondCalculator } from 'fincal-xx/src/bondCalculator';


export interface PaymentBreakDown {
  interest: number;
  principal?: number; 
  balance?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'fiscal-app';

  bondMonthlyPaymentCycle: PaymentBreakDown[] = [];

  loanMonthlyPaymentCycle: PaymentBreakDown[] = [];

  ngOnInit(): void {
    const bondCalculator = new BondCalculator(50000, 10, 1); // Creating a new instance of the bond class

    this.bondMonthlyPaymentCycle =
      bondCalculator.calculatePaymentBreakdown();

    const loan = new LoanCalculator(50000, 10, 1); // Creating a new instance of the Loan class

    this.loanMonthlyPaymentCycle =
      loan.calculatePaymentBreakdown();

  }

  getPaymentKeys(object:PaymentBreakDown):string[]{
    return Object.keys(object)
  }

  getPaymentValues(object:PaymentBreakDown):string[]{
    return Object.values(object)
  }
}
