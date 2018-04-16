const express = require('express');
const Movie = require('../models/movies-model');
const router = express.Router();
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET movies page */
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(moviesFromDb => {
      res.render('movies', {moviesList: moviesFromDb});
    })
    .catch(err => {
      next(err);
    });
});

/* GET movie details page */
router.get('/movies/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(movieDetails => {
      res.render('movie-details', {movie: movieDetails});
    })
    .catch(err => {
      next(err);
    });
});
module.exports = router;
