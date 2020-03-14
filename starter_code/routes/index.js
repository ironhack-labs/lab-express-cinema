const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res) => {
  Movie.find()
  .then(allMovies => {
  res.render("movies", {movies : allMovies})
})
.catch(error => {
  console.log('Error', error);
})
});

router.get('/movies/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(amovie => {
      res.render('detailed-movies', { movies: amovie });
    })
    .catch(error => {
      console.log('Error', error);
    })
});

module.exports = router;

