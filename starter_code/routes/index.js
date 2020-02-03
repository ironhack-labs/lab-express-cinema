const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
const mongoose = require;

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', getAllMovies);
router.get('/movie/:id', getMovie);

function getAllMovies(req, res, next) {
  Movie.find()
    .then((movies) => {
      // console.log(movies);
      res.render('movies', { movies: movies });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
}
function getMovie(req, res, next) {
  console.log(req.params.id);
  Movie.findById(req.params.id)
    .then((movie) => {
      console.log(movie);
      res.render('movieDetail', movie);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
}

module.exports = router;
