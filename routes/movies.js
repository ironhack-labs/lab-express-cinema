const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => {
  Movie
    .find({})
    .then((resultsFromDB) => {
      res.status(200).render('movies', { movies: resultsFromDB })
    })
    .catch((err) => {
      console.error(`Error occured while finding movies: ${err}`)

      next(err);
    }
    );
})

router.get('/:movieId', (req, res, next) => {
  const { movieId } = req.params;
  Movie
    .findById( movieId )
    .then((movie) => {
      res.status(200).render('movieDetails', { movie: movie })
    })
    .catch((err) => {
      console.error(`Error occured while finding movies: ${err}`)

      next(err);
    }
    );
})

module.exports = router;