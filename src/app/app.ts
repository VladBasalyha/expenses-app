import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseList } from './expense-list/expense-list';
import { NewExpenseForm } from './new-expense-form/new-expense-form';
import expenses from './mock/expenses.json';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExpenseList, NewExpenseForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = signal('Expenses list');
  expenses = [...expenses];
}
