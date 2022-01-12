const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// GET movies 
router.get('/movies', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.render('movies.hbs', {
      movies: movies,
    });
  } catch (err) {
    console.log('Error:', err);
  }
});

//GET movie details
router.get('/movie-details/:id', async (req, res, next) => {
  try {
    const movieDetails = await Movie.findById(req.params.id)
    res.render('movie-details.hbs', movieDetails);
  } catch (err) {
    console.logÇ('Error:', err);
  }
});

module.exports = router;