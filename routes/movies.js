const express = require('express');
const Movie = require('../models/movie');

const router = express.Router();

// GET movie list
router.get('/', (req, res, next) => {
  Movie.find({})
    .then((movies) => {
      console.log('length:', movies.length);
      res.render('movies/list', { movies });
    })
    .catch((err) => {
      console.log('Woops!');
      next(err);
    });
});

module.exports = router;
