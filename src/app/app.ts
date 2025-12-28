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
  myExpenses = [...expenses];
  newExpenseHandler(newExpense: any) {
    this.myExpenses = [...this.myExpenses, newExpense];
  }
  title = signal('Expenses list');
}
