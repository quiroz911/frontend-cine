import { Component, OnInit } from '@angular/core';
import { CarteleraService } from '../../services/cartelera.service';
import { pelicula, review } from '../../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-pelicula',
  templateUrl: './info-pelicula.component.html',
  styles: [
  ]
})
export class InfoPeliculaComponent implements OnInit {

  idMovie:string="";
  pelicula!: pelicula;
  enCinesMap = {'true': 'Sí', 'false':'No'};
  reviews!:review[];


  constructor(private carteleraService:CarteleraService, private router:Router) { 
   
  }

  ngOnInit(): void {
    this.idMovie = this.carteleraService.selectedMovieId;
    this.carteleraService.getPeliculaById(this.idMovie)
    .subscribe(data=>{
      this.pelicula = data;
    })
    this.carteleraService.getReviewsByPeliculaId(this.idMovie)
    .subscribe(reviews=>{
      this.reviews = reviews;
    })
  }

  navigateEscribirReview(){
    this.router.navigateByUrl('/cartelera/escribirReview')
  }

}
