const express = require('express');
const router = express.Router();

const Movie = require('../models/movie.model.js')

router.get('/', (req, res, next) => {
    Movie.find()
        .then(allMovies => {
            console.log(allMovies)
            res.render('movies/moviesList', {
                movies: allMovies
            })
            console.log('Se renderiza')
        })
        .catch(err => console.log(`Error al consultar las peliculas en la Base de Datos ${err}`))
})

router.get('/:id', (req, res, next) => {
    const movieId = req.params.id
    console.log("---------------- este es el id de la pelicula", movieId)
    Movie.findById(`${movieId}`)
        .then(movie => res.render('movies/movieProfile', movie))
        .catch(err => console.log('Error al conseguir una pelicula en la BBDD por el id', err))
})

module.exports = router;