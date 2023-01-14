const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get('/movies', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    const tooltip = req.query.n ? 'new' : req.query.d ? 'del' : false;
    res.render('movies/movies', { movies, tooltip: tooltip });
  } catch (err) {
    next(err);
  }
});

router.get('/movies/:id', async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    const tooltip = req.query.u ? true : false;
    res.render('movies/movie-details', { movie, tooltip });
  } catch (err) {
    next(err);
  }
});

router.post('/add-movie', async (req, res, next) => {
  try {
    const data = req.body;
    data.stars = data.stars.split(',').map((elem) => elem.trim());
    data.showtimes = data.showtimes.split(',').map((elem) => elem.trim());
    const saved = await Movie.create(data);
    if (saved) res.redirect('/movies?n=t');
  } catch (err) {
    next(err);
  }
});

router.post('/edit-movie/:id', async (req, res, next) => {
  try {
    const data = req.body;
    data.stars = data.stars.split(',').map((elem) => elem.trim());
    data.showtimes = data.showtimes.split(',').map((elem) => elem.trim());
    const saved = await Movie.findByIdAndUpdate(req.params.id, data);
    if (saved) res.redirect(`/movies/${req.params.id}?u=t`);
  } catch (err) {
    next(err);
  }
});

router.get('/delete/:id', async (req, res, next) => {
  try {
    const del = await Movie.findByIdAndDelete(req.params.id);
    console.log(del);
    if (del) res.redirect('/movies?d=t');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
