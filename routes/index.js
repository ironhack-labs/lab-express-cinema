const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    const tooltip = req.query.n ? true : false;

    res.render('movies/movies', { movies, tooltip: tooltip });
  } catch (err) {
    next(err);
  }
});

router.get('/movies/:id', async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.render('movies/movie-details', { movie });
  } catch (err) {
    next(err);
  }
});

router.post('/add-movie', async (req, res, next) => {
  try {
    const data = req.body;
    data.stars = data.stars.split(',');
    data.showtimes = data.showtimes.split(',');
    const saved = await Movie.create(data);
    if (saved) res.redirect('/movies?n=t');
  } catch (err) {
    next(err);
  }
});
module.exports = router;
