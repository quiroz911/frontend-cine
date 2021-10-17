import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { ActoresComponent } from './actores/actores.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InfoPeliculaComponent } from './info-pelicula/info-pelicula.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'cartelera',
    children:[
      {path: '', component: CarteleraComponent},
      {path: 'infoPelicula', component: InfoPeliculaComponent },
    ]
  },
  {
    path: 'actores', component: ActoresComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'login', component: LoginComponent
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
