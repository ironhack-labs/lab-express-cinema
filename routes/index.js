const express = require('express');
const router = express.Router();
const { Movie } = require('../models/Movie.model'); // Copy - pasted // not understood yet

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */
router.get('/movies', async (req, res, next) => {
  const movieData = await Movie.find({}, 'title image');
  try {
    res.render('movies', { Movies: movieData }); // Don´t have to send all data here...
  } catch (err) {
    console.error(err);
  }
});

/* GET details page */
router.get('/details/:movieId', async (req, res, next) => {
  const movieDetailsData = await Movie.findById(req.params.movieId);
  try {
    res.render('details', { movieDetails: movieDetailsData });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
