import { Component, OnInit } from '@angular/core';
import { actor } from 'src/app/interfaces/interfaces';
import { ActoresService } from '../../services/actores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styles: [
  ]
})
export class ActoresComponent implements OnInit {

  actores!:actor[];

  constructor(private actoresService: ActoresService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.actoresService.getActoresList()
      .subscribe(data=>{
        this.actores = data;
      })
  }

  navigateRegistroActor(){
    this.router.navigateByUrl('/actores/registrar')
  }

}
