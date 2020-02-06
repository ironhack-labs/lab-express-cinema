const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')

router.get('/', (req, res) => {
  Movie.find()
    .then(allMovies => res.render('movies/movies-list', { movies: allMovies }))
    .catch(err => console.log("Error consultadno las películas en la BBDD: ", err))
})

router.get('/details/:id', (req, res) => {

  const movieId = req.params.id

  Book.findById(movieId)
    .then(theMovie => res.render('movies/movie-details', theMovie))
    .catch(err => console.log("Error consultadno el libro en la BBDD: ", err))
})

module.exports = router