const express = require("express");
const router = express.Router();
const Movie = require("../model/Movie");

router.get("/movies", (req, res) => {
  Movie.find().then((movies) => {
    res.render("movies", { movies: movies });
  });
});

router.get("/movies/:id", (req, res) => {
  const dioni = req.params.id;
  Movie.findById(dioni).then((movie) => {
    // res.send(movie);
    res.render("moviedetails", { det: movie });
  });
});

module.exports = router;
