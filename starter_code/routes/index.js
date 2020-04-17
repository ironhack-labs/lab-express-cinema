const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movies');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', async (req, res, next) => {
  const movies = await Movie.find({});
  res.render('movies', { movies });
});

router.get('/movie/:id', async (req, res, next) => {
  const [movie] = await Movie.find({ _id: req.params.id });
  console.log(movie);
  res.render('movie', { movie, title: 'test' });
});

module.exports = router;
