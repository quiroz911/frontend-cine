import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';

import { ActoresComponent } from './actores/actores.component';

import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { InfoPeliculaComponent } from './info-pelicula/info-pelicula.component';
import { RegistroActorComponent } from './registro-actor/registro-actor.component';
import { EscribirReviewComponent } from './escribir-review/escribir-review.component';


@NgModule({
  declarations: [
    HomeComponent,

    ActoresComponent,
    
    CarteleraComponent,
    InfoPeliculaComponent,
    RegistroActorComponent,
    EscribirReviewComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
