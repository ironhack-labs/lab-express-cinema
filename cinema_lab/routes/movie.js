const express = require('express');
const router = express.Router();
const Movie = require('../models/movie')

router.get('/:id', (req, res, next) => {
  Movie.find({})
  .then((movies) => {
    const {id} = req.params;
    Movie.findById(id)
    .then((movie) => {
      res.render('movie', movie)
    })
    .catch((error) => {
      next(error);
    })
  });
  });
module.exports = router;