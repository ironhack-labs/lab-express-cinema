const express = require("express");
const router = express.Router();
const MovieModel = require("./../models/Movie.model");

router.get("/movies", async (req, res, next) => {
  try {
    const movies = await MovieModel.find();
    res.render("movies", { movies });
  } catch (err) {
    next(err);
  }
});

router.get("/movie/:id", async (req, res, next) => {
  try {
    const movieDetails = await MovieModel.findById(req.params.id);
    console.log(movieDetails);
    res.render("details", movieDetails);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
