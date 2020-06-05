const express = require("express");
const router = express.Router();
const Movies = require("../models/movies.js");

/* GET home page */
router.get("/movies", (req, res, next) => {
  Movies.find()
    .then((movie) => res.render("movies", { movies: movie }))
    .catch((err) => console.log(err));
});
router.get("/movie/:_id", (req, res, next) => {
  Movies.findById(req.params).then((movie) => res.render("movie-data", movie));
});
router.get("/", (req, res, next) => res.render("index"));

module.exports = router;
