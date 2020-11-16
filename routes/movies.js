const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.model.js");

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allThemoviesFromDB) => {
      res.render("movies", { movies: allThemoviesFromDB });
    })
    .catch((error) =>
      console.log("Error while getting the movies from the DB: ", error)
    );
});

router.get("/movie/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render("movie", { movie });
    })
    .catch((error) =>
      console.log("Error while getting the movies from the DB: ", error)
    );
});

module.exports = router;
