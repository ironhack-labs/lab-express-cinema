var express = require('express');
var router = express.Router();

var Movie = require('../models/movie.js')

router.get('/', (req, res, next) => {
  Movie.find({})
  .then((movies) => {
    res.render('movies', { movies });
  })
  .catch((err) => {
    next(err);
  })
});

router.get('/:id', (req, res, next) => {
  const movieId = req.params.id
  Movie.findById(movieId)
  .then((movie) => {
    res.render('detail', { movie })
  })
  .catch((err) => {
    next(err)
  })
})

module.exports = router;