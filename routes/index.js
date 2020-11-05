const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res) => res.render('index'));

router.get('/movies', async (req, res) => {
  const movies = await Movie.find({}, {image: 1, title: 1})
  console.log(movies)
  res.render('movies', {movies})
});

router.get('/movies/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id)
  console.log(movie)
  res.render('movie', movie)
})

module.exports = router;
