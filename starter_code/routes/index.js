const express = require('express');
const hbs = require('hbs');
const Movie = require('../models/Movie');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(allMovies => {
      console.log('movies: ', allMovies);
      res.render('movies', { myMovies: allMovies });
    })
    .catch(err => console.log(err));
});

router.get('/movies/:movieID', (req, res, next) => {
  Movie.findById(req.params.movieID)
    .then(theMovie => {
      res.render('movie_details', { movie: theMovie });
    })
    .catch(err => console.log(err));
});

module.exports = router;
