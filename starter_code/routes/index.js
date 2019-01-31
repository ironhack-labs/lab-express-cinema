const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then((movies) => {
    console.log(movies)
    res.render('movies', {movies});
  })
})

router.get('/movies/:movieId', (req, res, next) => {
  Movie.find({_id: req.params.movieId})
  .then((movie) => {
    console.log(movie)
    res.render('movie', {movie});
  })
})

module.exports = router;
