const express = require('express');
const router  = express.Router();
const Movie   = require('../models/Movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies', {movies});
    })
    .catch(error => {
      res.render('error');
    })
});

router.get('/movies/:id', (req, res, next) => {
  const movieId = req.params.id;
  Movie.find({_id: movieId})
    .then(movieInfo => {
      const movie = movieInfo[0];
      console.log(movie);
      res.render('movie-details', {movie});
    })
});

module.exports = router;
