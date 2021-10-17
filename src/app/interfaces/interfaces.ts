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