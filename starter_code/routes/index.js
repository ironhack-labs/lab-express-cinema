const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((movie) => {
      console.log(movie)
      res.render("movies",{movie});
    })
    .catch(error => {
      console.log(error)
    })
});

module.exports = router;
