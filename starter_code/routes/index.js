const express = require('express');
const router  = express.Router();
const Movie = require('../models/movies');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res, next) => {
  Movie.find()
  .then(movieList => {
    res.locals.movieList = movieList
      res.render('movies')
  })
  .catch((err) => {
    next(err);
  });
});

router.get("/movie/:movieId", (req, res, next) => {
  Movie.findById(req.params.movieId)
  .then((movieee) => {
    res.locals.movieee = movieee
    res.render('single-movie-page');
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
