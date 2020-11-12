const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie.model')

// Endpoints


// Listado de Películas
router.get('/', (req, res) => {

    Movie
        .find()
        .then(allMovies => res.render('movies/movies-list', { allMovies }))     // es lo mismo que  { allBooks: allBooks }
        .catch(err => console.log(err))
})

module.exports = router

// Detalle de  Películas
router.get('/detalle/:movie_id', (req, res) => {

    const movieId = req.params.movie_id

    Movie
        .findById(movieId)
        .then(theMovie => res.render('movies/details', theMovie))
        .catch(err => console.log(err))
})

module.exports = router