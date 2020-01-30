const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET movie page */
router.get("/movies", (req, res, next) => {
  Movie.find().then(movies => res.render("movies", {movies})).catch(err => console.log("Y a une couille dans l'paté, les films sont pas passés"))
  
});

/* GET movie detail page */
router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id).then(movie => res.render("movie-details", {movie})).catch(err => console.log("Y a une couille dans l'paté, ce film à tout fait foirer"));
});

module.exports = router;
