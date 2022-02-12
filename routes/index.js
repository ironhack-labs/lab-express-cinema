const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find().then((movies) => {
    console.log(movies[0]);
    res.render("movies", { movies });
  });
});

router.get("/details/:movieId", (req, res, next) => {
  const movieId = req.params.movieId;
  Movie.findById({ _id: movieId }).then((movie) => {
    console.log(movie);
    res.render("details", movie);
  });
});
module.exports = router;
