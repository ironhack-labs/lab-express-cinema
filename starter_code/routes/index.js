const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  // get all movies
  // render movies view with movies data
  Movie.find().then(movies => {
    console.log(movies);
    res.render("movies.hbs", { moviesList: movies });
  });
});

router.get("/movies/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  Movie.findById(movieId).then(movie => {
    res.render("movieDetails.hbs", { movie: movie });
  });
});

module.exports = router;
