// Dada la siguiente watchlist, crear una función que tome el array original
// y devuelva un arreglo de objetos que solo contenga las películas:
// 1. Dirigidas por Cristopher Nolan.
// 2. Con un imdbRating > 8.0
// El arreglo que se devuelve SOLO DEBE CONTENER el nombre de la película, ningún otra información
// Es obligatorio para este CC resolverlo con la función map()


function returnMovieTitle (watchlist) {
    return watchlist
        .map((movie) => {
            if (movie.Director === 'Christopher Nolan' && (movie.imdbRating) > 8.0) {
                return movie.Title
            }
        }).filter(movie => movie !== undefined)

}

export default returnMovieTitle