import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { actor } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  getActoresList(){
    return this.http.get<actor[]>(`${this.baseUrl}/Actor/list`)
  }
}
