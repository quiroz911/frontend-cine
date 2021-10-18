import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { actor, actorPostSinFoto } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  getActoresList(){
    return this.http.get<actor[]>(`${this.baseUrl}/Actor/list`)
  }
  
  postActorSinFoto(actor:actorPostSinFoto){
    return this.http.post<actor>(`${this.baseUrl}/Actor/`, actor)
  }

  postFotoActor(id:string, file:File){
    var formData = new FormData();
    formData.append('IdActor', id);
    formData.append('Foto', file);
    return this.http.post<any>(`${this.baseUrl}/Actor/uploadFoto`, formData)
  }
}
