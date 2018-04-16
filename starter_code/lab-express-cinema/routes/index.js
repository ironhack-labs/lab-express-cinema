const express = require('express');
const Movie = require('../models/movie-model.js');

const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// Get movies pages
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((moviesFromDb) => {
      res.locals.moviesList = moviesFromDb;
      // console.log(moviesFromDb);
      res.render('movies');
      console.log("Displaying all the movies");
    })
    .catch((err) => {
      next(err);
    })
})

//Get movie info route
router.get('/movies/:id', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findOne({'_id' : movieId})
    .then((movie) => {
      res.render('movie-details', {movie});
      console.log(movieId);
    })
    .catch((err) => {
      next(err);
    })
})

module.exports = router;
