const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movie/:_id", async (req, res) => {
  const { _id } = req.params;
  const movie = await Movie.findOne({ _id });
  res.render("movie", { movie });
});

router.get("/movies", async (req, res) => {
  const movies = await Movie.find({});
  res.render("movies", { movies });
});

module.exports = router;
