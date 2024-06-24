const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

// 映画リストを表示するルート
router.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.render('movies', { movies });
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).send('Error fetching movies');
  }
});

// 映画の詳細を表示するルート
router.get('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.render('movie-detail', { movie });
  } catch (error) {
    console.error('Error fetching movie details:', error);
    res.status(500).send('Error fetching movie details');
  }
});

module.exports = router;
