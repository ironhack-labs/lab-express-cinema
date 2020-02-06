const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie')

router.get('/', (req, res) => {
  Movie.find()
    .then(allMovies => res.render('movies/movies-details', {
      movies: allMovies
    }))
    .catch(err => console.log("Error consultando películas en la BBDD: ", err))
})

router.get('/movie/:id', (req, res) => {

  const movieId = req.params.id
  console.log('ahí va el id', movieId)
  Movie.findById(movieId)
    .then(theMovie => res.render('movies/movie', theMovie))
    .catch(err => console.log("Error consultando la película en la BBDD: ", err))
})

module.exports = router