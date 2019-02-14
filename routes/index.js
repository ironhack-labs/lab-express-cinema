const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', async (req, res, next) => {

  const movies = await Movie.find();

  console.log(movies);

  res.render('movies', {movies});
});

router.get('/movies/:id', async (req, res, next) => {

  const movie = await Movie.findById(req.params.id);

  movie.times = movie.showtimes.join('  |  ');
  
  res.render('movie', {movie});
});

module.exports = router;
