const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET movies page */
router.get('/movies', async (req, res, next) => {
  // callback
  // Movie.find((error, result) => {
  //   console.log(result);
  // });

  // then
  // Movie.find().then((result) => {
  //   console.log(result);
  // });

  const movies = await Movie.find();

  res.render('movies', { movies: movies });
});

/* GET unique movie page */
router.get('/movies/:id', async (req, res, next) => {
  const movie = await Movie.findById(req.params.id);

  res.render('movieDetails', movie);
});

module.exports = router;
