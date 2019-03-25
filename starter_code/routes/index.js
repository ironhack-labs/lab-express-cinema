const express = require('express');
const router = express.Router();
const Movie = require('../models/movies.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {

  Movie.find()
    .then(movies => res.render('movies', {movies}))
    .catch(error => console.log(error));

})

router.get('/movie/:movieId', (req, res, next) => {

  Movie.findOne({_id:req.params.movieId})
    .then(movie => res.render('movie', {movie}))
    .catch(error => console.log(error));

})

module.exports = router;