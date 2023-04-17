const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

// GET movies page
router.get("/movies", async (req, res, netx) => {
  const movies = await Movies.find();
  console.log(movies);

  res.render("movies", { movies });
});

module.exports = router;
