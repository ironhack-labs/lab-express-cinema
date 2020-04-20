const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');


router.get('/movies', (req, res) => {
  // get all the movies
  Movie.find().then(movies => {
    // render a 'movies' view with the movies data
    res.render('movies', { movies: movies });
  })
  
});

router.get('/movies/:id', (req, res) => {
    const movieId = req.params.movieId;
    Book.findById(movieId).then(movie => {
      res.render('seeMore', { movie: movie });
    });
  });

module.exports = router;