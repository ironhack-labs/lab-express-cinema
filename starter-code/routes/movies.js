'use strict';

const express = require('express');
const router = express.Router();

const Movie = require('../models/movie.js');

router.get('/', (req, res, next) => {
  Movie.find()
    .then(allMovies => {
      console.log(allMovies);
      res.render('movies', {allMovies: allMovies});
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
