import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';

import { ActoresComponent } from './actores/actores.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
   
    ActoresComponent,
        LoginComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
