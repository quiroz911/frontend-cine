import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { funcion, pelicula } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CarteleraService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = environment.baseUrl;
  selectedMovieId: string = '0';

  getPeliculasList() {
    return this.http.get<pelicula[]>(`${this.baseUrl}/Pelicula/list`);
  }
  async getPeliculaById(id: string) {
    return this.http.get<pelicula>(`${this.baseUrl}/Pelicula/${id}`).toPromise();
  }
  async getFunciones(idPelicula: string, idSalaCine: string) {
    return this.http.get<funcion[]>(
      `${this.baseUrl}/salacine/funciones?idSalacine=${idSalaCine}&idPelicula=${idPelicula}`
    ).toPromise();
  }
}
