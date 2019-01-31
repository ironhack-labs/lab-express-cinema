const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.js');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  Movie.find()
    .then((movies) => {
      console.log(movies);
      res.render('movies', { movies });
      // res.send(movies);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/movie/:movieId', (req, res) => {
  Movie.find({ _id: req.params.movieId })
    .then((movie) => {
      console.log('filme', movie);
      res.render('movie', { movie });
      // res.send(movies);
    })
    .catch((error) => {
      console.log(error);
    });
});


module.exports = router;
