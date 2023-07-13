const Movie = require("../models/Movie.model");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  Movie.find()
    .then((movies) => {
      console.log(movies);
      res.render("movies", { movies: movies });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render("movie-detail", movie);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
