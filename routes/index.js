const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/movies", async (req, res, next) => {
  const movies = await Movie.find();
  res.render("movies", { movies });
});

module.exports = router;
