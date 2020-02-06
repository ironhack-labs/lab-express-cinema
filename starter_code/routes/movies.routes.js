const express = require('express')
const router = express.Router()

const Movie = require('../models/movie')

router.get('/', (req, res) => {
    Movie.find()
        .then(allMovies => res.render('movies', {
            movies: allMovies
        }))
        .catch(err => console.log("Error consultando las peliculas en la BBDD: ", err))
})

router.get('/details/:MovieId', (req, res) => {

    const MovieId = req.params.MovieId

    Movie.findById(MovieId)
        .then(theMovie => res.render('movie-details', theMovie))
        .catch(err => console.log("Error consultando la pelicula en la BBDD: ", err))
})

module.exports = router