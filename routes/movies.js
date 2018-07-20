const express = require('express');
const Movie = require('../models/movie');

const router = express.Router();

// GET movie list
router.get('/', (req, res, next) => {
  Movie.find({})
    .then((movies) => {
      res.render('movies/list', { movies });
    })
    .catch((err) => {
      next(err);
    });
});

// GET movie info
router.get('/:movieID', (req, res, next) => {
  const movieID = req.params.movieID;
  Movie.find({ _id: movieID })
    .then((movie) => {
      res.render('movies/info', { movie });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
