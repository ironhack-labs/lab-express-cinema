const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');


router.get('/movies', (req, res) => {
  Movie.find().then(movie => {
    console.log("hola agus " + movie)
    res.render('movies', { moviesList: movie });
  })
});

router.get('/movies/:movieId', (req, res) => {
  const movieId = req.params.movieId;
  Movie.findById(movieId).then(movie => {
    res.render('movieDetails', { movie: movie });
  });
});

module.exports = router;