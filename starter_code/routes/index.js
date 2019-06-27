const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie");


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(moviesFromDb => {
      res.render("movies", { movies: moviesFromDb });
    });
});

router.get("/movie/:movieId", (req, res, next) => {
  let movieId = req.params.movieId
  Movie.findById(movieId)
    .then(moviesFromDb => {
      res.render("movie-detail", { movie: moviesFromDb });
    })
});


module.exports = router;
