const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

router.get('/', (req, res) => {
  Movie.find().then(moviesFromDB => {
    res.render('movies', { moviesList: moviesFromDB });
  }).catch(err => {
    console.log(err);
  })
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Movie.findById(id).then(movieFromDB => {
    res.render('movie', { movie: movieFromDB });
  }).catch(err => {
    console.log(err);
  });
});

module.exports = router;