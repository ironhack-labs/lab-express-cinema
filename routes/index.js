const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      console.log(movies);
      res.render("movies", { movies: movies });
    })
    .catch((error) =>
      console.log("Error while getting the movies from the DB: ", error)
    );
});

router.get("/movie/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render("movie-details", { movie });
    })
    .catch((error) => console.log("Error", error));
});

module.exports = router;
