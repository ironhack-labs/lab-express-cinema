const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movies')

/* GET home page */
router
  .get('/', (req, res, next) => {
    res.render('index');
  })
  .get('/movies', async (req, res) => {
    const movies = await Movies.find()
    res.render('movies', { movies })
  })
  .get('/movie/:movieId', async (req, res) => {
    const { movieId } = req.params
    const movie = await Movies.find({ _id: movieId })
    res.render('movie', {movie})

  })

module.exports = router;
