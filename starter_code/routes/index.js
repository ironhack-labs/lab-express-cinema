const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movies');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movies.find()
    .then(allMovies => {
      // console.log('Retrieved; movies from DB:', theMovies);
      res.render('movies', { movies: allMovies });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
});

router.get('/movies/:movieId', (req, res, next) => {
  Movies.findById(req.params.movieId)
    .then(theMovies => {
      res.render('movie-details', { movies: theMovies });
    })
    .catch(error => {
      console.log('Error while retrieving movie details: ', error);
    })
});

module.exports = router;
