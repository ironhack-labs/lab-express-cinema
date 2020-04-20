const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/movies", (req, res) => {
  Movie.find().then((movies) => {
    res.render("movies", { movies: movies });
  });
});

router.get("/movies/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  console.log(movieId);
  Movie.findById(movieId).then((movie) => {
    res.render("movieDetails", { movie: movie });
  });
});

module.exports = router;
