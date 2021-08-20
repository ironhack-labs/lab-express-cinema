const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get('/', (req, res, next) => {
  Movie.find()
    .then((allMoviesFromDB) => {
      // console.log(JSON.stringify(allMoviesFromDB, null, '\t'))
      res.render('movies', { movies: allMoviesFromDB });
    })
    .catch((err) => {
      console.log('Movies were not retrieved from the DB', err);
    });
});

router.get('/:movieId', (req, res, next) => {
  console.log('Movie id', req.params.movieId);
  Movie.findById(req.params.movieId)
    .then((movieFromDB) => {
      // console.log(JSON.stringify(movieFromDB, null, '\t'));
      res.render('movie-details', movieFromDB);
    })
    .catch((err) => {
      console.log(`Movie was not found or smth went wrong: ${err}`);
    });
});

module.exports = router;
