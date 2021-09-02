const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js');

router.get('/', (req, res, next) => res.render('../views'));

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('../views/movies', { movies });
      console.log(movies);
    })
    .catch(err => console.log(err));
});

router.get('/movie/:id', (req, res) => {
  const { id } = req.params;

  Movie.findById(id)
    .then(movie => {
      res.render('movie', movie);
    })
    .catch(err => console.log(err));
});

module.exports = router;
