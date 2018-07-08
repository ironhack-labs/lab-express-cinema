'use strict';

const express = require('express');
const router = express.Router();

const Movie = require('../models/movie.js');

router.get('/', (req, res, next) => {
  Movie.find()
    .then(allMovies => {
      // console.log(allMovies);
      res.render('movies', {allMovies: allMovies});
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/:id', (req, res, next) => {
  const movieId = req.params.id; // Why params.id??????????????????
  Movie.findById(movieId)
    .then(movie => {
      res.render('movie-details', {movie: movie});
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
