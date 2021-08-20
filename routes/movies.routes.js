const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

// * Create the route that lists all the movies
router.get("/", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render("movies/movies", { movies });
    })
    .catch((err) => {
      console.log(
        "The following error occured while accessing the movies: ",
        err
      );
    });
});

// * Create the route that lists a specific movie
router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then((movies) => {
      res.render("movies/movieDetails", { movies });
    })
    .catch((err) => {
      console.log(
        "The following error occured while accessing the chosen movie: ",
        err
      );
    });
});

module.exports = router;
