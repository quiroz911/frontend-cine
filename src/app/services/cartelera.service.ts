import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { pelicula, peliculaPost, review } from 'src/app/interfaces/interfaces';
import { actorDePeliculaPost } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CarteleraService {


  constructor(private http:HttpClient) { 

  }

  private baseUrl: string = environment.baseUrl;
  selectedMovieId: string = "0";
  
  getPeliculasList(){
    return this.http.get<pelicula[]>(`${this.baseUrl}/Pelicula/list`);
  }
  getPeliculaById(id:string){
    return this.http.get<pelicula>(`${this.baseUrl}/Pelicula/${id}`);
  }

  getReviewsByPeliculaId(id:string){
    return this.http.get<review[]>(`${this.baseUrl}/Pelicula/${id}/reviews`);
  }

  postReviewByPelicula(review:review){
    return this.http.post<review>(`${this.baseUrl}/Pelicula/review`, review);
  }

  postPelicula(peliculaPost:peliculaPost){
    return this.http.post<pelicula>(`${this.baseUrl}/Pelicula`, peliculaPost);
  }

  postFotoPelicula(id:string, file:File){
    var formData = new FormData();
    formData.append('IdPelicula', id);
    formData.append('Poster', file);
    return this.http.post<any>(`${this.baseUrl}/Pelicula/uploadPoster`, formData)
  }

  postActorDePelicula(actorDePelicula:actorDePeliculaPost){
    return this.http.post<any>(`${this.baseUrl}/Pelicula/addActor`, actorDePelicula)
  }
  
}
