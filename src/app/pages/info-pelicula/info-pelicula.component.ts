import { Component, OnInit } from '@angular/core';
import { CarteleraService } from '../../services/cartelera.service';
import { pelicula } from '../../interfaces/interfaces';

@Component({
  selector: 'app-info-pelicula',
  templateUrl: './info-pelicula.component.html',
  styles: [
  ]
})
export class InfoPeliculaComponent implements OnInit {

  idMovie:string="";
  pelicula!: pelicula;
  enCinesMap = {'true': 'Sí', 'false':'No'}

  constructor(private carteleraService:CarteleraService) { 
   
  }

  ngOnInit(): void {
    this.idMovie = this.carteleraService.selectedMovieId;
    this.carteleraService.getPeliculaById(this.idMovie)
    .subscribe(data=>{
      this.pelicula = data;
    }) 
  }

}
