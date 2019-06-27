const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find({}).then(movies => {
    res.render('movies', {
      movies: movies
    });
  });
}); 

router.get('/movie/:movieId', (req, res, next) => {
  let movieId = req.params.movieId; 
  Movie.findById(movieId).then(movie => {
    console.log(movie);
    res.render('movie-info', {
      movie: movie
    });
  });
});

module.exports = router;
