const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model.js");

router.get("/", (req, res, next) => {
  Movie.find()
    .then((allMoviesFromDataBase) => {
      res.render("movies", { movies: allMoviesFromDataBase });
    })
    .catch((error) => {
      console.log("Error while getting the movies from the DB:", error);
      next(error);
    });
});

router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((oneMovie) => {
      res.render("movie-details", { movies: oneMovie });
    })
    .catch((error) => {
      console.log("Error while getting the movies from DB:", error);
      next(error);
    });
});

module.exports = router;
