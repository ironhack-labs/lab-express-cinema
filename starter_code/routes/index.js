const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET movies page */
router.get('/movies', async (req, res, next) => {
  const movies = await Movie.find()
  res.render('movies', {movies});
});


/* GET movies details page */
router.get('/movies/:id', async (req, res, next) => {
  const {id} = req.params
  const movie = await Movie.findById(id)
  res.render('movies-detail', movie);
});

module.exports = router;
