const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', async (req, res, next) => {
  try {
    const moviesArr = await Movie.find();
    res.render('movies', { moviesArr });
  } catch (error) {
    console.error('error', error.message);
    res.render('error', error);
  }
});

router.get('/movies/:id', async (req, res, next) => {
  try {
    const movieId = req.params.id;
    const movie = await Movie.findById(movieId);
    res.render('details', movie);
  } catch (error) {
    console.error('error', error.message);
    res.render('error', error);
  }
});

module.exports = router;
