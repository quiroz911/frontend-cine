export interface actor{
    id: string,
    nombre: string,
    fechaNacimiento: string,
    foto: string
}

export interface pelicula{
    id: string,
    titulo: string,
    enCines: boolean,
    fechaEstreno: string,
    actores: actor[],
    generos: genero[],
    poster: string,
    salasCine: salaDeCine[],
}

export interface genero{
    id: string,
    nombre: string,
}

export interface salaDeCine{
    id: string,
    nombre: string,
    peliculas: pelicula[],
}

export interface review{
    id: string;
    idPelicula:string;
    nombre:string;
    calificacion:number;
    descripcion:string;
}

export interface funcion{
  id:string;
  fecha: string
}
