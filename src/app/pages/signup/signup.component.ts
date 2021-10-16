import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [

  ]
})
export class SignupComponent implements OnInit{
  newForm!: FormGroup;

  hide = true;

  constructor(private fb: FormBuilder){

  }
  ngOnInit(): void {
    this.newForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    });
    
  }

  getErrorMessage() {
    if (this.newForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.newForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

}
