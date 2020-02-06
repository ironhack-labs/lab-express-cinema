const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.model');


router.get('/', (req, res, next) => {
  Movie.find()
    .then(movies => {
      console.log(`Movies: ${movies}`)
      res.render('movies', {
        movies: movies
      })
    })
    .catch(err => console.log(`Error: ${err}`))
});

router.get('/movie/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movie', movie)
    })
    .catch(err => console.log(`Error: ${err}`))
});

module.exports = router;