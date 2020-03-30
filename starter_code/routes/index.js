const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie
    .find()
    .then(allMovies => {
      res.render('movies', {movie: allMovies});
    })
    .catch(error => console.log(error));
});

router.get('/movies/:movieId', (req, res, next) => {
  Movie
    .findById(req.params.movieId)
    .then(theMovie => {
      res.render('infomovie', {movie: theMovie})
    })
    .catch(error => console.log(error));
})

module.exports = router;
