const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then((movies) => {
    console.log(movies);
    res.render('movies', {
      movies
    });
  })
  .catch((error) => {
    console.log('An error happened while finding movies: ', error);
    next(error);
  })
});

module.exports = router;
