const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.model');

/* GET movie page */

router.get ('/movies', (req, res, next) => {
    Movie.find()
    .then(allMoviesFromDb => {
        res.render('movies', {movies: allMoviesFromDb});
    })
    .catch(error => {
        next(error);
      });
});


  router.get('/movies/:id', (req, res, next) => {
    const movieId = req.params.id;
    Movie.findById(movieId)
      .then(movieFromDb => {
        res.render('details', { movie: movieFromDb });
      })
      .catch(error => {
        console.log('Error while getting the movie details from the DB:', error);
        next(error);
      });
  });

module.exports = router;