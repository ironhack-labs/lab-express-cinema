'use strict';

const express = require('express');
const router = express.Router();

const Movie = require('../models/movie.js');

/* GET movie page. */
router.get('/', function (req, res, next) {
  Movie.find()
    .then(movies => {
      res.render('movies', {paquitoMovie: movies});
      console.log(movies);
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
