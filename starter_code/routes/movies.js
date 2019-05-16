const express = require('express');
const router = express.Router();
const Movie = require("../models/movie")
// const dbName = 'movies-excercise-week4Bootcamp'

// MOVIES
router.get('/', (req, res, next) => {

  Movie.find()
    .then(allMovies => {
      console.log(allMovies)
      res.render('movies', { movies: allMovies })
    })
    .catch(error => console.log(error))
});

// MOVIES DETAIL
router.get('/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(movie => {
      res.render('movieDetail', movie)
    })
    .catch(error => console.log(error))
});


module.exports = router;
