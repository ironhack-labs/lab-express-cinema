const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies', { movies });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
});

router.get('/movies/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(movie => {
      res.render('movie', { movie });
    })
    .catch(error => {
      console.log('Error while retrieving movie details: ', error);
    })
});

module.exports = router;
