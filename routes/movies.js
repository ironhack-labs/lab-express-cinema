const express = require('express');
require('../configs/db.config');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET movies page */
router.get('/', (req, res, next) => {
  Movie.find().then((moviesList) => {
    console.log('Movies List successfully extracted');
    res.render('movies', { movies: moviesList });
  });
});

// Insert new Movie

router.get('/new', (req, res) => {
  res.render('new-movie');
});

// Receiving new movie info from form
router.post('/new', (req, res) => {
  const { movieTitle, movieDirector, movieImage, movieDescription } = req.body;

  const newMovie = {
    title: movieTitle,
    director: movieDirector,
    image: movieImage,
    description: movieDescription,
  };

  console.log(newMovie);

  Movie.create(newMovie)
    .then((movie) => {
      res.redirect('/movies/' + movie._id);
    })
    .catch((error) => {
      console.log('There has been an error upon movie creation');
    });
});

/* GET movies detail page */
router.get('/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId).then((movie) => {
    console.log('Detail movie successfully extracted');
    res.render('movie-detail', { movie });
  });
});

module.exports = router;
