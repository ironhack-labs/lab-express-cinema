const express = require("express");
const Movie = require("../models/Movie");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res) => {
  Movie.find().then(movies => {
    res.render("movies", { moviesList: movies });
  });
});

router.get("/movie/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  Movie.findById(movieId).then(movie => {
    console.log(movie);
    res.render("movie", { movie: movie });
  });
});

module.exports = router;
