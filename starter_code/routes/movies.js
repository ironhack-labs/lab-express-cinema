const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie')

router.get('/', (req, res, next) => {
  Movie.find()
  .then(movie => {
    res.render('movies', {movies: movie})
  })

});







module.exports = router;

