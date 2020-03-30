const express = require('express');
const router  = express.Router();
const Movie = require('../models/movies');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// get /movies
router.get('/movies', (req, res, next) => {
  Movie
    .find()
    .then(movies => {
      console.log(movies)
      res.render('movies', {
        movies
      });
    })
    .catch(error => console.log(error));
});

// get movie details
router.get('/movie/:movieId', (req, res, next) => {
  Movie
    .findById(req.params.movieId)
    .then(movies => {
      res.render('movie-details', {
        movies
      })
    })
    .catch(error => console.log(error));
})

module.exports = router;
