const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js');

router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(allMoviesFromDB => {
      res.render('all-movies', { movies: allMoviesFromDB }); 
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
      next(error);
    });
});

router.get('/movies/:movieId', (req, res, next) => {
  const {movieId} = req.params;
  Movie.findById(movieId)
  .then(foundMovie => {
    console.log(foundMovie);
    res.render('movie-details', {movie: foundMovie});
  })
  .catch(e => {
    console.log(`oops, we got this error : ${e}`);
    next(e);
  });
});

module.exports = router;
