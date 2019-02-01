const express = require('express');
const router  = express.Router();
const MovieModel = require('../models/Movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  MovieModel.find()
    .then((returnedMovies) => {
      console.log(returnedMovies);
      res.render('moviesList', { returnedMovies });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get('/movie/:id', (req, res, next) => {
  const movieId = req.params.id;
  MovieModel.findOne({'_id': movieId})
    .then((movie) => {
      console.log(movie);
      res.render('movie-detail', { movie });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
