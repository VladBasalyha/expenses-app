import { Component } from '@angular/core';
import { Button } from '../button/button';
import expenses from '../mock/expenses.json';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
  imports: [Button],
})
export class ExpenseList {
  title = 'app-expense-list';
  expenses = expenses;
}
