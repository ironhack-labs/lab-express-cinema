const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

// GET movies page
router.get("/movies", async (req, res, netx) => {
  const movies = await Movies.find();
  res.render("movies", { movies });
});

// GET movie-detail page
router.get("/movies/:id", async (req, res, netx) => {
  const movie = await Movies.findById(req.params.id);
  res.render("movie-detail", movie);
});

module.exports = router;
