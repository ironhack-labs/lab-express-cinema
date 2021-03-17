const express = require('express');
require('../configs/db.config');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET movies page */
router.get('/', (req, res, next) => {
  Movie.find().then((moviesList) => {
    console.log('Movies List successfully extracted');
    res.render('movies', { movies: moviesList });
  });
});

/* GET movies detail page */
router.get('/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId).then((movie) => {
    console.log('Detail movie successfully extracted');
    res.render('movie-detail', { movie });
  });
});

module.exports = router;
