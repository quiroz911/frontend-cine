import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

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
      return 'Debes ingresar un valor';
    }

    return this.newForm.controls.email.hasError('email') ? 'Email Inválido' : '';
  }

  cleanFields(){
    this.newForm.reset();
  }
}
