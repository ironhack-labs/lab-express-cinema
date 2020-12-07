const express = require("express");
const router = express.Router();
const MovieModel = require("./../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", async (req, res, next) => {
  try {
    const allMovies = await MovieModel.find();
    console.log("here", allMovies);
    res.render("movies", { allMovies });
  } catch (err) {
    res.send(err);
  }
});

router.get("/movieDescription/:id", async (req, res, next) => {
  try {
    const findMovie = await MovieModel.findById(req.params.id);
    res.render("movieDescription", { findMovie });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
