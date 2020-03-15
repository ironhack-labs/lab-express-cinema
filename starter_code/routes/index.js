const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie');

module.exports = router;

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// router.get('/movies', async (req, res, next) => {
//   const movies = await Movies.find();
//   await console.log(movies);
//   await res.render('movies', {movies});
// });

router.get('/movies', async (req, res, next) => {
  const movies = await Movie.find();
  res.render('movies',{movies});
});

router.get('/movies/:_id', async (req, res, next) => {
  const movie = await Movie.findOne(req.params);
  console.log(movie)
  res.render("movie", movie);
});



