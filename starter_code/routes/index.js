const express = require('express');

const Movie = require('../models/Movie');

const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => res.render('movies', { movies }))
    .catch(err => console.log('An error has ocurred when importing the movies', err));
});

router.get('/movies/:id', (req, res, next) => {
  const myMovie = Movie.findById(req.params.id)
    .then(movie => res.render('movie', { movie }))
    .catch(err => console.log('An error has ocurred when importing the movies', err));
});

module.exports = router;
