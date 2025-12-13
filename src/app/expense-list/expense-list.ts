import { Component } from '@angular/core';
import { Button } from '../button/button';
import expenses from '../mock/expenses.json';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList {
  title = 'app-expense-list';
  expenses = expenses;

  addExpense() {
    this.expenses.push({
      id: this.expenses.length + 1,
      price: 20,
      category: 'Miscellaneous',
      date: new Date().toISOString().split('T')[0],
      payment_type: 'Cash',
      store_name: 'Сільпо',
    });
    console.log('New expense added');
  }
}
