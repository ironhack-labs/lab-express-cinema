const express = require('express');
const router  = express.Router();
const Movie = require('../model/Movie').Movie;

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie
    .find({}, 'title image')
    .then(movies => {
      res.render('movies', {movies});
    })
    .catch(err => {
      next(err)
    });
});


router.get('/movie/:movieId', (req, res, next) => {

  const movieId = req.params.movieId;
  Movie.
    findById(movieId)
    .then(movie => {
      res.render('movie', movie);
    })
    .catch(err => next(err));
});


module.exports = router;
