const express = require('express');

const Movie = require("../models/Movie");
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


/* GET MOVIES */
router.get('/movies', (req, res, next) => {
  Movie.find().then(movies => {
    res.render("movies", { movies });
  });
});


/* GET MOVIE ID */
router.get("/movies/:movieId", (req, res) => {
  const movieId = req.params.movieId;

  Movie.findById(movieId).then(movie => {
    res.render("info", { movie });
  });
});

module.exports = router;
