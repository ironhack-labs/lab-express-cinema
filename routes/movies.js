const express = require("express");
const Movie = require("../models/Movies.model");

const router = express.Router();

router.get("/movies", (req, res, next) => {
  Movie.find().then((allMovies) => {
    //console.log(allMovies);
    res.render("movies", { allMovies });
  });
});

module.exports = router;
