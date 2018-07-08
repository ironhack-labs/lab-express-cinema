'use strict';

const express = require('express');
const router = express.Router();

const Movie = require('../models/movie.js');

/* GET movie page. */
router.get('/', function (req, res, next) {
  Movie.find()
    .then(movie => {
      console.log(movie);
      res.render('movies', {paquitoMovie: movie});
    })
    .catch(error => {
      console.log(error);
    });
});

// Get movie detail page
router.get('/:id', function (req, res, next) {
  const movieId = req.params.id;
  Movie.findById(movieId)
    .then(movie => {
      console.log(movie);
      res.render('movie-details', movie);
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
