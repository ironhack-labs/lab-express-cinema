const express = require('express');
const Movie = require('../models/Movie')
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
})
.get('/movies', async (req, res) => {
  const movies =  await Movie.find()
  console.log(movies)
  res.render('movie-list', {movies})
})
.get('/movies/:movieTitle', async (req, res) => {
  const movie =  await Movie.findById(req.params.movieTitle)
  res.render('description', movie)
})


module.exports = router;
