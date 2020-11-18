const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get("/movie/:movieId", (req, resp) => {
  console.log(req.params);
  Movie.findById(req.params.movieId).then((movie) => {
    console.log(movie);
    resp.render("movieDetails", { movie: movie });
  });
});

module.exports = router;
