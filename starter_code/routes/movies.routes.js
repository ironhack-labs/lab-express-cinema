const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')

router.get('/', (req, res) => {
  console.log('Hollaaa')
  Movie.find()
    .then(allMovies => res.render('movies/movie-list', { movies: allMovies }))
    .catch(err => console.log("Error consultando las pelicula en la BBDD: ", err))
})

router.get('/details/:theMovieIdFromTheURL', (req, res) => {

  const movieId = req.params.theMovieIdFromTheURL

  Movie.findById(movieId)
    .then(theMovie => res.render('movies/movie-details', theMovie))
    .catch(err => console.log("Error consultadno la pelicula en la BBDD: ", err))
})

module.exports = router