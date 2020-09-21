const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index", {css: ["home"]}));

router.get("/movies", async (req, res, next) => {
  try {
    res.render("movies.hbs", {
      movies: await Movie.find(),
      css: ["movies"]
    });
  } catch (err) {
    next(err);
  }
});

router.get("/movie/:id", async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.render("movieDetails", {movie, css: ["movie"]});
  } catch (err) {
   next(err);
  }
});

module.exports = router;
