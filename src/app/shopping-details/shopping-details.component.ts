import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.scss']
})
export class ShoppingDetailsComponent implements OnInit {
  shoppingDetailsForm: FormGroup;
  cities = [{ "name": "pune", "value": "PUNE" },
  { "name": "delhi", "value": "DELHI" },
  { "name": "mohali", "value": "MOHALI" }
  ];
  state = [{ "name": "Maharashtra", "value": "Maharashtra" }, { "name": "Gujarat", "value": "Gujarat" },
  { "name": "Delhi", "value": "Delhi" }];
  selectedValue: string ='';
  constructor(private fb: FormBuilder) {
    this.shoppingDetailsForm = this.fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      city: ['', Validators.required],
      state : [''],
      pincode:['',[Validators.required, Validators.minLength(5), Validators.maxLength(6), Validators.pattern("[0-9]+")]],
    })
   }

  get lName() {
    return this.shoppingDetailsForm.get('lName');
  }
  get fName() {
    return this.shoppingDetailsForm.get('fName');
  }
  get pincode() {
    return this.shoppingDetailsForm.get('pincode');
  }
  ngOnInit(): void {
  }
  matcher = new MyErrorStateMatcher();
  onSave() {
    if(this.shoppingDetailsForm.valid)
    console.log("form values", this.shoppingDetailsForm.value);
  }
}
