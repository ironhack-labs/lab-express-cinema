const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then(movies => res.render('movies', {movies}))
    .catch(err => console.error(err));
});

router.get('/movie/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => res.render('movie', {movie}))
    // .then(movie => res.json({movie}))
    .catch(err => console.error(err));
});

module.exports = router;