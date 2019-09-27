const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(arrayOfMovies => {
    res.render('movies', {movies: arrayOfMovies});
  })
  .catch(error => {throw new Error(error)})
});

module.exports = router;
