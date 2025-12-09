import { Component } from '@angular/core';
import expenses from '../mock/expenses.json';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList {
  title = 'app-expense-list';
  expenses = expenses;
}
