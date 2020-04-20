const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/', (req, res) => {
  // get all the movies
  Movie.find()
    .then((movies) => {
      console.log(movies, 'dfds');
      // render a 'movies' view with the movies data
      res.render('movies', { moviesList: movies });
    })
    .catch((err) => console.log(err));
  // res.send('this is the movies route');
});

router.get('/:movieId', (req, res) => {
  const movieId = req.params.movieId;
  Movie.findById(movieId).then((movie) => {
    // res.send(movie);
    res.render('movieDetails', { movie: movie });
  });
});

module.exports = router;
