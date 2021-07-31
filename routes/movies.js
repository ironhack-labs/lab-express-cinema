const express = require("express");
const router = express.Router();

const Movie = require("../models/movies.model");

router.get("/movies", (req, res, next) => {
  Movie.find();
  res.render("movies.hbs");
});

module.exports = router;
