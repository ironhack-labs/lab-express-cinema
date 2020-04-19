const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie.js'); 

/* GET list all movies */
router.get('/movies', (req, res) => {
  Movie.find()
    .then(allMoviesFromDB => {
      //console.log('MOVIES: ', allMoviesFromDB);
      res.render('movies/movies', {movies: allMoviesFromDB});
    })
    .catch(err => {
      console.log('An error has occurred: ', err);
    });
});

/* GET display movie info */
router.get('/movies/:id', (req, res) => {
  const movieId = req.params.id;

  Movie.findById(movieId)
  .then(movie => {
    res.render('movies/movie-info', {movie});
  })
  .catch(err => {
    console.log('An error has occurred: ', err);
  });
});

module.exports = router;