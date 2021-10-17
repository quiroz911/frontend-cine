import { Component, OnInit } from '@angular/core';
import { actor } from 'src/app/interfaces/interfaces';
import { ActoresService } from '../../services/actores.service';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styles: [
  ]
})
export class ActoresComponent implements OnInit {

  actores!:actor[];

  constructor(private actoresService: ActoresService) { 
   
  }

  ngOnInit(): void {
    this.actoresService.getActoresList()
      .subscribe(data=>{
        this.actores = data;
      })
  }

}
