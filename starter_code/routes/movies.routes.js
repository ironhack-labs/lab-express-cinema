const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.model')

router.get('/', (req, res, next) => {
  Movie.find()
    .then(allMovies => res.render('movies', {
      movies: allMovies
    }))
    .catch(err => console.log(`No puedo mostrar las peliculas por el siguiente error ${err}`))
})

router.get('/details/:id', (req, res) => {

  const movieId = req.params.id

  Movie.findById(movieId)
    .then(theMovie => res.render('moviesDetails', {
      theMovie
    }))
    .catch(err => console.log(`No puedo mostrar las peliculas por el siguiente error ${err}`))
})


module.exports = router;