const express = require('express');
const router = express.Router();
const Movies = require("../models/Movie");


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movies.find()
    .then(moviesPayload => {
      res.render("movies", {moviesPayload})
    })
});

router.get('/movie/:id', (req, res, next) => {
  let movieId = req.params.id;

  Movies.find({_id: movieId})
    .then(moviePayload => {
      res.render("movie", {moviePayload})
    })
});

module.exports = router;
