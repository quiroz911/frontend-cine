import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actor } from 'src/app/interfaces/interfaces';
import { actorPostSinFoto } from '../../interfaces/interfaces';
import { ActoresService } from '../../services/actores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-actor',
  templateUrl: './registro-actor.component.html',
  styles: [
  ]
})
export class RegistroActorComponent implements OnInit {

  FormGroup!: FormGroup;
  idActor!: string;
  formData!: FormData;

  @ViewChild('foto',{read:ElementRef}) foto!: ElementRef;

  constructor(private fb: FormBuilder, private actoresService:ActoresService, private router:Router) { }

  ngOnInit(): void {
    this.FormGroup = this.fb.group({
      name: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
    })
  }


  registrarActor(){
    if(this.FormGroup.invalid){return}
    let actorToPost: actorPostSinFoto = {
      nombre: this.FormGroup.controls['name'].value,
      fechaNacimiento: this.FormGroup.controls['birthday'].value,
    }
    this.actoresService.postActorSinFoto(actorToPost)
    .subscribe(data=>{this.subirFoto(data.id)});
   
  }

  subirFoto(id:string){
    this.actoresService.postFotoActor(id, this.foto.nativeElement.files[0])
    .subscribe(data=>{console.log})

    this.router.navigateByUrl('/actores');
  }
}
