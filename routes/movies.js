const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js');

/* GET home page */
router.get('/movies', (req, res, next) => {
  Movie.find().then((moviesdB) => {
    res.render('movies', { movies: moviesdB });
  });
});

router.get('/movies/:movieId', (req, res, next) => {
  const { movieId } = req.params;
  Movie.findById(movieId)
    .then((theMovie) => {
      console.log(theMovie);
      res.render('movies-details.hbs', { movie: theMovie });
    })
    .catch((error) => {
      console.log('Error while retrieving book details: ', error);

      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

module.exports = router;
