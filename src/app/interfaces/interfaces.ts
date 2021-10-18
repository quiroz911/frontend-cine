export interface actor{
    id: string,
    nombre: string,
    fechaNacimiento: string,
    foto: string,
}

export interface actorPostSinFoto{
    nombre: string,
    fechaNacimiento: string,
}

export interface fotoActor{
    idActor: string,
    foto: string,
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

export interface peliculaPost{
    titulo: string,
    fechaEstreno: boolean,
}

export interface actorDePeliculaPost{
    idActor:string,
    idPelicula:string,
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
    idPelicula:string;
    nombre:string;
    descripcion:string;
    calificacion:number;
}