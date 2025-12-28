import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList {
  title = 'app-expense-list';
  @Input() expenses: any[] = [];
}
