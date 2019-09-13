const express = require('express');
const Movie = require('../models/Movie.js');
const router = express.Router();

/* GET movie page */
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      console.log(movies);

      res.render("movies", { movies })
    })
    .catch(err => console.error(err))
});

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      console.log(movie);

      res.render("movie", { movie })
    })
    .catch(err => console.error(err))
});

module.exports = router;