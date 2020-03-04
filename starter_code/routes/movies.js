const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie');

// GET /movies
router.get('/', (req, res, next) => {
  Movie.find({})
  .then(movies => {
    res.render('movies', { movies });
  })
  .catch(err => console.log('Error while rendering movies: ', err));
  console.log('printing movies');
});

//GET /movies/:id
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
  .then(foundMovie => {
    res.render('eachmovie', { foundMovie });
  })
  .catch(err => console.log('Error while rendering movie data: ', err));
  console.log('printing each movie data');
});

module.exports = router;