import { Component, OnInit } from '@angular/core';
import { actor } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styles: [
  ]
})
export class ActoresComponent implements OnInit {

  actores!:actor[];

  constructor() { 
    this.actores=[{
      id:1,
      nombre:'Tom Holland',
      fechaNacimiento: '17/03/1994',
      foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/1200px-Tom_Holland_by_Gage_Skidmore.jpg'
    },
    {
      id:2,
      nombre:'Robert Downey Jr.',
      fechaNacimiento:'20/05/1990',
      foto:'https://www.networthlists.com/wp-content/uploads/2020/09/Net-worth-of-Robert-Downey-Jr-746x1024.jpg'
    },
    {
      id:3,
      nombre:'Scarlett Johansson',
      fechaNacimiento:'22/11/1984',
      foto:'https://celebmafia.com/wp-content/uploads/2018/11/scarlett-johansson-people-s-choice-awards-2018-part-ii-15.jpg'
    }
  ]
  }

  ngOnInit(): void {
  }

}
