const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// GET movies page
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((movies) => {
      console.log(movies);
      res.render('movies', { movies });
    })
    .catch(err => {
      console.log(err);
    });
});

// GET single movie page
router.get('/movie/:movieId', (req, res, next) => {
  Movie.find({_id: req.params.movieId})
    .then((movie) => {
      console.log(movie);
      res.render('movie', { movie });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
