const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allMovies) => {
      res.render("movies", { eachMovie: allMovies });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
