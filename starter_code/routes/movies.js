const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/movies", (req, res) => {
  Movie.find().then((movies) => {
    res.render("movies", { moviesList: movies });
  });
  // res.send("this is the moviesList route");
});

router.get("/movies/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  Movie.findById(movieId).then((movie) => {
    // res.send(movie);
    res.render("movieDetails", { movie: movie });
  });
});
module.exports = router;
