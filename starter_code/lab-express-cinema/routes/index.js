const express = require('express');
const Movie = require('../models/movie');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then(moviesArr => {
      console.log( 'Movies:', moviesArr );
      res.render('movies', { movies: moviesArr } );
    })
});

router.get('/movies/:movieId', (req, res, next) => {
  let movieId = req.params.movieId;
  Movie.findById(movieId)
    .then(movieDoc => {
      console.log( 'Movie:', movieDoc );
      res.render('movie-info', movieDoc );
    })
});


module.exports = router;
