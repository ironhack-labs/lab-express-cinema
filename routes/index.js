const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js');

// GET home page
router.get('/', (req, res, next) => {
  res.render('index');
});

// GET movies page
router.get('/movies', (req, res, next) => {
  Movie.find() // find all the movies (no filter)
  .then(movies => {
    res.render("movies", { movies });
  })
  .catch(error => {
    console.log(error);
  })
});

// GET movie details
router.get('/movies/:id', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findById(movieId)
    .then(movies => {
      res.render("movie-detail", {movies});
      console.log(movies)
    })
    .catch(error => {
      console.log(error);
    })
});

module.exports = router;
