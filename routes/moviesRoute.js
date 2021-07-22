const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');

//READ ALL
router.get('/', (req, res, next) => {
  Movie.find()
    .then((movieDocuments) => {
      res.render('movies.hbs', {
        style: ['styleMovieList.css'],
        movies: movieDocuments,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

//READ ONE
router.get('/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then((movieDocument) => {
      res.render('oneMovie.hbs', {
        style: ['styleOneMovie.css'],
        movie: movieDocument,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
