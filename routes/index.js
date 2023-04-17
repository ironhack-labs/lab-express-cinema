const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res) => {
  Movie.find()
    .then(movies => {
      res.render('movies', { movies });
    })
    .catch(error => {
      console.error("Error fetching movies:", error);
    });
});

router.get('/movies/:id', (req, res) => {
  const movieId = req.params.id;
  Movie.findById(movieId)
    .then(movie => {
      res.render('movie-details', { movie });
    })
    .catch(error => {
      console.error("Error fetching movie details:", error);
    });
});

module.exports = router;
