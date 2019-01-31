const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render("movies", {movies: movies});
    console.log(movies);
  })
  .catch(error => {
    console.log(error)
  });
});

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(movie => {
    res.render("viewmovies", {movie: movie});
    console.log(movie);
  })
  .catch(error => {
    console.log(error)
  });
});

module.exports = router;
