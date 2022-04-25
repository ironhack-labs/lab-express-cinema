const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));



router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((moviesArr) => {
      res.render('movies', { movies: moviesArr })
    })
    .catch((e) => {
      console.log('an error here!', e)
    })
});



router.get('/movies/:movieId', (req, res, next) => {
  const id = req.params.movieId;
  Movie.findById(id)
    .then((movieDetails) => {
      res.render('movie-details', { movie: movieDetails })
    })
    .catch((e) => {
      console.log('an error here!', e)
    })
});






module.exports = router;
