const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js');

/* GET movies page */
router.get('/', (req, res, next) => {
  Movie.find()
  .then((movies) => {
    res.render('movies', { movies });
  })
  .catch((err) => {
    console.log(err);
  })
});

/* GET movie page */
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  Movie.findById(id)
  .then((movie) => {
    console.log(movie);
    res.render('movie', { movie });
  })
  .catch((err) => {
    console.log(err);
  })
});

module.exports = router;