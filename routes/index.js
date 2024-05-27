const express = require("express");
const router = express.Router();
const Movies = require("../models/movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movies.find().then((data) => {
    res.render("movies", { movies: data });
  });
});

router.get("/movies/:id", (req, res, next) => {
  Movies.findById(req.params.id).then((data) => {
    res.render("movie-details", { movie: data });
  });
});

module.exports = router;
