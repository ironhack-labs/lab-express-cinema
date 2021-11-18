const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");
/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.render("movies", { movies });
  } catch {
    console.log("The error while searching movie occurred: ", err);
  }
});

router.get("/movies/:id", async (req, res) => {
  const idMovie = req.params.id;
  try {
    const moviesWhitId = await Movie.findById(idMovie);

    res.render("movies-info", moviesWhitId);
  } catch {
    console.log("The error while searching moviesId occurred: ", err);
  }
});

module.exports = router;
