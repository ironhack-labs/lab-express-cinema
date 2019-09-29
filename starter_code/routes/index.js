const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(moviesFromDB => {
      console.log(moviesFromDB);

      res.render('movies', { movies: moviesFromDB })
    })
    .catch(err => console.log(err))
});

router.get('/movies/:MovieId', (req, res, next) => {
  Movie.findById(req.params.MovieId)
    .then(theMovie => {
      console.log(theMovie)
      res.render('movie-details', { movie: theMovie });
    })
});
module.exports = router;
