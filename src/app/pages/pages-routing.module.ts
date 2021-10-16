import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { ActoresComponent } from './actores/actores.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'cartelera', component: CarteleraComponent 
  },
  {
    path: 'actores', component: ActoresComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path:'**', redirectTo:'home'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
