const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index', {title: 'Cinema<br>Ironhack'});
});

/* GET movies list */
router.get('/movies', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.render('movie-views/movies', {movies});
  } catch (error) {
    console.log('Error while retrieving movies list:>> ', error);
    res.status(500).send(error);
  }
});

/* GET movie details */
router.get('/movie/:id', async (req, res, next) => {
    const movieId = req.params.id;
    try {
     const movie = await Movie.findById(movieId);
     res.render('movie-views/movie-details', {movie});
    } catch(error) {
        console.log(`Error while retrieving movie id ${movieId}:>> `, error);
        res.status(500).send(error);
    }
});

module.exports = router;
