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

module.exports = router;
