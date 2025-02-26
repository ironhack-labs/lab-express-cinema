const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res, next) => {
    Movie.find() // Fetch all movies from the database
      .then((movies) => {
        console.log('Movies fetched from the database:', movies);
        res.render('movies', { movies }); // Render the movies.hbs view with the movies data
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        next(error);
      });
  });
  router.get('/movies/:id', (req, res, next) => {
    const movieId = req.params.id; // Get the movie ID from the URL
  
    Movie.findById(movieId) // Find the movie by its ID
      .then((movie) => {
        if (!movie) {
          return res.status(404).send('Movie not found'); // Handle case where movie is not found
        }
        res.render('movie-details', { movie }); // Render the movie-details view with the movie data
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
        next(error);
      });
  });

module.exports = router;
