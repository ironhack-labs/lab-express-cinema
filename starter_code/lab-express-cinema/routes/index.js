const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      console.log(movies)
      res.render("movies", {movies});
    })
    .catch(error => {
      console.log(error)
    })
});

module.exports = router;