const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie.model');

router.get('/', (req, res, next) => {

  Movies.find()
    .then(movies => {
      res.render('movies', {movies});
    })
    .catch(err => {next(err);});
});

router.get('/:id', (req, res, next) => {

  Movies.findOne({_id: req.params.id})
    .then(movie => {
      res.render('movieDetails', {movie});
    })
    .catch(err => {next(err);});
});

module.exports = router;
