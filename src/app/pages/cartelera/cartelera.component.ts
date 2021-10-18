import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pelicula } from 'src/app/interfaces/interfaces';
import { CarteleraService } from '../../services/cartelera.service';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styles: [
  ]
})
export class CarteleraComponent implements OnInit {

  peliculas!: pelicula[];

  constructor(private carteleraService:CarteleraService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.carteleraService.getPeliculasList()
      .subscribe(data=>{
        this.peliculas=data;
      })
  }

  navigateInfoPelicula(idmovie:string){
    this.carteleraService.selectedMovieId=idmovie;
    this.router.navigateByUrl('/cartelera/infoPelicula')
  }

  nagivateRegistrarPelicula(){
    this.router.navigateByUrl('/cartelera/registrarPelicula');
  }

}
