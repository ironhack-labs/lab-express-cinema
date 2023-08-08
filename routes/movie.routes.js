const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model'); // Import the Movie model

// Define the route for displaying movie details
router.get('/movie/:id', (req, res, next) => {
  const movieId = req.params.id; // Get the movie ID from the URL

  // Find the movie by ID in the database
  Movie.findById(movieId)
    .then(movie => {
      if (!movie) {
        // Movie not found
        res.render('error', { message: 'Movie not found' });
        return;
      }

      // Render the movie details view and pass the movie data
      res.render('movie-details', { movie });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
