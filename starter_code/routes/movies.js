const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');

/* GET movies page */
router.get('/', (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render('movies', { movies });
    })
    .catch((err) => {
      console.log(err);
    });
});

// GET for movie details page (once you clicked on See more)
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then((movie) => {
      res.render('movie', { movie })
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
