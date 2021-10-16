import { Component, OnInit } from '@angular/core';
import { pelicula } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styles: [
  ]
})
export class CarteleraComponent implements OnInit {

  peliculas!: pelicula[];

  constructor() {
    this.peliculas = [{
      id: 1,
      titulo: 'Avengers Endgame',
      enCines: true,
      fechaEstreno: '2019',
      poster: 'https://quepeliculaver.info/wp-content/uploads/2020/05/avengers-endgame-190-poster-scaled.jpg'
    }]
  }

  ngOnInit(): void {
  }

}
