const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();

const Movies = require("../models/Movie.model");

// GET movies page
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allMoviesFromDB) => {
      res.render("movies/movie-list.hbs", { movies: allMoviesFromDB });
    })
    .catch((err) =>
      console.log("Error while getting movies from DB", err).next(err)
    );
});

module.exports = router;
