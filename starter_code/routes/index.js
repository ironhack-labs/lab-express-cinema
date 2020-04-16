const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(allMovies => {
      console.log('Movies', allMovies)
      res.render('movies', { allMovies })
    })
    .catch(err => console.log('Error while retrieving movie details: ', err))
});

router.get('/movies/details/:movieId', (req, res, next) => {

  Movie.findById(req.params.movieId)
    .then(theMovie => res.render('movie-details', theMovie))
    .catch(err => console.log('Error while retrieving movie details: ', err))
})


module.exports = router;
