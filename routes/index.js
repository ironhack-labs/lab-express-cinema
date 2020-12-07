const express = require("express");
const router = express.Router();
const movieModel = require("./../models/Movie.model");

router.get("/", (req, res, next) => res.render("index"));
router.get("/movies", async (req, res, next) => {
  try {
    const allMovies = await movieModel.find();
    res.render("movies", { allMovies });
  } catch (error) {
    next(error);
  }
});
router.get("/movie/:id", async (req, res, next) => {
  try {
    const movieId = await movieModel.findById(req.params.id);
    res.render("movie", { movieId });
  } catch (error) {
    next(error);
  }
});
module.exports = router;