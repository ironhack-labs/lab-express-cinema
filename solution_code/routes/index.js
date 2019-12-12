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
      res.render('movies', {movies: movies});
    })
    .catch(next)
  ;
});

router.get('/movies/:id', (req, res, next) => {
  const id = req.params.id;

  Movie.findById(id)
    .then(movie => {
      res.render('movie', {movie: movie});
    }).catch(next)
})

module.exports = router;
