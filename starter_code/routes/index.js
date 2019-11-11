const express = require('express');

const router = express.Router();

const Movie = require('../models/Movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then(document => {
      const movies = document;
      // res.send(movies);
      res.render('movies', { movies });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get('/movies/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(document => {
      const movie = document;
      // res.send(movie);
      res.render('movie', { movie });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

module.exports = router;
