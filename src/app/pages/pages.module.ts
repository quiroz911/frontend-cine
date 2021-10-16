import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';

import { ActoresComponent } from './actores/actores.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CarteleraComponent } from './cartelera/cartelera.component';


@NgModule({
  declarations: [
    HomeComponent,

    ActoresComponent,
    LoginComponent,
    SignupComponent,
    CarteleraComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
