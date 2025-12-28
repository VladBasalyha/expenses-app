import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-expense-form',
  imports: [ReactiveFormsModule],
  templateUrl: './new-expense-form.html',
  styleUrl: './new-expense-form.css',
})
export class NewExpenseForm {
  @Output() expenseAdded = new EventEmitter<any>();

  newPriceForm = new FormGroup({
    id: new FormControl(Math.random().toString(36).substring(2)),
    price: new FormControl(''),
    category: new FormControl(''),
    date: new FormControl(''),
    storeName: new FormControl(''),
    paymentType: new FormControl(''),
  });

  addExpense() {
    if (this.newPriceForm.valid) {
      this.expenseAdded.emit(this.newPriceForm.value);
      this.newPriceForm.reset();
    }
  }
}
