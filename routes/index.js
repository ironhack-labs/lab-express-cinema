const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res, next) => {
  const movies = await Movies.find();
  res.render('movies', { movies });
});

router.get('/movie/:id', async (req, res, next) => {
  const movie = await Movies.findById(req.params.id);
  console.log(movie);
  res.render('movie', movie);
});

module.exports = router;
