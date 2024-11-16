const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model'); // Import your Movie model

// Home page route
router.get('/', (req, res) => {
  res.render('index'); // Renders the home page view (index.hbs)
});

// Movies list route
router.get('/movies', (req, res) => {
  Movie.find() // Fetch all movies from the database
    .then(movies => {
      res.render('movies', { movies }); // Pass the movies data to movies.hbs
    })
    .catch(err => {
      console.error('Error fetching movies:', err);
      res.status(500).send('Error fetching movies');
    });
});

// Movie details route
router.get('/movies/:id', (req, res) => {
  const { id } = req.params; // Extract the movie ID from the URL
  Movie.findById(id) // Fetch the movie with the specified ID
    .then(movie => {
      if (movie) {
        res.render('movie-details', { movie }); // Pass the movie data to movie-details.hbs
      } else {
        res.status(404).send('Movie not found');
      }
    })
    .catch(err => {
      console.error('Error fetching movie details:', err);
      res.status(500).send('Error fetching movie details');
    });
});

module.exports = router; // Export the router so it can be used in app.js
