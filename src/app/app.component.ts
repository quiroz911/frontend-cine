import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-cine';

  constructor(private router: Router){

  }

  navigateHome(){
    this.router.navigateByUrl('/home');
  }
  
  navigateCartelera(){
    this.router.navigateByUrl('/cartelera');
  }

  navigateActores(){
    this.router.navigateByUrl('/actores');
  }

  navigateLogin(){
    this.router.navigateByUrl('/login');
  }
}
