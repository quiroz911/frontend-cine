import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-actor',
  templateUrl: './registro-actor.component.html',
  styles: [
  ]
})
export class RegistroActorComponent implements OnInit {

  FormGroup!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.FormGroup = this.fb.group({
      name: ['', [Validators.required]],
      birthday: ['', [Validators.required]]
    })
  }


  registrarActor(){
    
  }
}
