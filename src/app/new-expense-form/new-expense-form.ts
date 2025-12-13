import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-expense-form',
  imports: [],
  templateUrl: './new-expense-form.html',
  styleUrl: './new-expense-form.css',
})
export class NewExpenseForm {
  newPriceForm = new FormGroup({
    price: new FormControl(''),
    category: new FormControl(''),
    date: new FormControl(''),
    storeName: new FormControl(''),
    paymentType: new FormControl(''),
  });
}
