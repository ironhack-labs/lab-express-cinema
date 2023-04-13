const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get("/:movieId", (req, res, next) => {
  const { movieId } = req.params;

  Movie.findById(movieId).then(movie => {
    console.log(movie);
    res.render("movies/movie-details", { movie });
  });
});

module.exports = router;
