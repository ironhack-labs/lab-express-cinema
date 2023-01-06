const Movie = require("../models/Movie.model");

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      console.log("The movies found are: ", movies);
      res.render("movies", { movies });
    })
    .catch((err) => {
      console.log("Something went wrong while finding movies! ", err);
      next(err);
    });
});

router.get("/:movieId", (req, res, next) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then((movie) => {
      console.log("Movie found: ", movie);
      res.render("movie-details", movie);
    })
    .catch((err) => {
      console.log("Something went wrong while getting movie id: ", err);
      next(err);
    });
});

module.exports = router;
