import { Component, OnInit } from '@angular/core';
import { CarteleraService } from '../../services/cartelera.service';
import {
  funcion,
  pelicula,
  review,
  salaDeCine,
} from '../../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-pelicula',
  templateUrl: './info-pelicula.component.html',
  styles: [],
})
export class InfoPeliculaComponent implements OnInit {
  idMovie: string = '';
  pelicula!: pelicula;
  enCinesMap = { true: 'Sí', false: 'No' };
  reviews!: review[];
  funciones!: funcion[];
  funcion!: funcion;
  salaCine!: salaDeCine;

  constructor(
    private carteleraService: CarteleraService,
    private router: Router
  ) {
    this.idMovie = this.carteleraService.selectedMovieId;
  }

  async ngOnInit(): Promise<void> {
    this.pelicula = await this.carteleraService.getPeliculaById(this.idMovie);
  }

  async getFunctions() {
    this.funciones = await this.carteleraService.getFunciones(this.idMovie, this.salaCine.id)
  }
  navigateEscribirReview() {
    this.router.navigateByUrl('/cartelera/escribirReview');
  }
}
