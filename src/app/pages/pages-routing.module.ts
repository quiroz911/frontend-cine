import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { ActoresComponent } from './actores/actores.component';
import { InfoPeliculaComponent } from './info-pelicula/info-pelicula.component';
import { RegistroActorComponent } from './registro-actor/registro-actor.component';
import { EscribirReviewComponent } from './escribir-review/escribir-review.component';
import { RegistrarPeliculaComponent } from './registrar-pelicula/registrar-pelicula.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'cartelera',
    children:[
      {path: '', component: CarteleraComponent},
      {path: 'infoPelicula', component: InfoPeliculaComponent },
      {path: 'escribirReview', component: EscribirReviewComponent},
      {path: 'registrarPelicula', component: RegistrarPeliculaComponent}
    ]
  },
  {
    path: 'actores', 
    children:[
      {path: '', component: ActoresComponent},
      {path: 'registrar', component: RegistroActorComponent}
    ]
  },
  {
    path:'**', redirectTo:'home'
  }
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
