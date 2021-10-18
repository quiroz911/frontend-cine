import { Component, OnInit } from '@angular/core';
import { CarteleraService } from '../../services/cartelera.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { review } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';

interface calificacion{
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-escribir-review',
  templateUrl: './escribir-review.component.html',
  styles: [
  ]
})


export class EscribirReviewComponent implements OnInit {

  nombrePelicula!:string;
  formGroup!:FormGroup;
  calificaciones:calificacion[] = [
    {value: 1, viewValue: "1 Estrella"},
    {value: 2, viewValue: "2 Estrella"},
    {value: 3, viewValue: "3 Estrella"},
    {value: 4, viewValue: "4 Estrella"},
    {value: 5, viewValue: "5 Estrella"},
  ]

  constructor(private carteleraService:CarteleraService, private fb: FormBuilder, private router:Router) { 
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      calification: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.carteleraService.getPeliculaById(this.carteleraService.selectedMovieId)
      .subscribe(pelicula=>{
        this.nombrePelicula = pelicula.titulo;
      })
  }

  submitReview(){
    let reviewToPost:review = {
      idPelicula: this.carteleraService.selectedMovieId,
      nombre: this.formGroup.controls['name'].value,
      descripcion: this.formGroup.controls['description'].value,
      calificacion: this.formGroup.controls['calification'].value,
    }
    this.carteleraService.postReviewByPelicula(reviewToPost)
    .subscribe(p=>{console.log});
    this.router.navigateByUrl('/cartelera');
  }
}
