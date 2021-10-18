import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSelectionList } from '@angular/material/list';
import { actor } from 'src/app/interfaces/interfaces';
import { ActoresService } from '../../services/actores.service';
import { peliculaPost, actorDePeliculaPost } from '../../interfaces/interfaces';
import { CarteleraService } from '../../services/cartelera.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-pelicula',
  templateUrl: './registrar-pelicula.component.html',
  styles: [
  ]
})
export class RegistrarPeliculaComponent implements OnInit {

  FormGroup!: FormGroup;
  actoresList!: actor[]
  actoresSeleccionadosEnLista:actor[] = [];
  
  @ViewChild('foto',{read:ElementRef}) foto!: ElementRef;
  @ViewChild('actoresSeleccionados') actoresSeleccionados!: MatSelectionList;

  constructor(private fb:FormBuilder, private actoresService:ActoresService, private carteleraService: CarteleraService,
    private router:Router) {
    this.FormGroup = this.fb.group({
      titulo: ['', [Validators.required]],
      estreno: ['', [Validators.required]],
      actoresSelected: [''],
    })
   }

  ngOnInit(): void {
    this.actoresService.getActoresList()
    .subscribe(actores=>{
      this.actoresList = actores;  
    })
  }


  registrarPelicula(){
    
    for(var i=0; i<this.actoresSeleccionados.selectedOptions.selected.length;i++){
      this.actoresSeleccionadosEnLista[i] = this.actoresSeleccionados.selectedOptions.selected[i]?.value;
    }
    
    let peliculaPost: peliculaPost = {
      titulo: this.FormGroup.controls['titulo'].value,
      fechaEstreno: this.FormGroup.controls['estreno'].value
    }
    
    this.carteleraService.postPelicula(peliculaPost)
    .subscribe(data=>{this.subirFotoPelicula(data.id)})
  }

  subirFotoPelicula(id:string){
    this.carteleraService.postFotoPelicula(id, this.foto.nativeElement.files[0])
    .subscribe(data=>{this.agregarActoresPelicula(id)})

  }
  
  agregarActoresPelicula(id:string){
    if(this.actoresSeleccionadosEnLista.length==0){return}
    let actorDePeliculaPost!:actorDePeliculaPost;
    for(let actor of this.actoresSeleccionadosEnLista){
      actorDePeliculaPost = {
        idPelicula: id,
        idActor: actor.id
      }
      this.carteleraService.postActorDePelicula(actorDePeliculaPost)
      .subscribe(data=>{console.log})
    }
    this.router.navigateByUrl('/cartelera');
  }
}
