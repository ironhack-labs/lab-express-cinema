const express = require("express");
const MovieModel = require("./../model/Movie.model");
const router = express.Router();

router.get("/movies", async (req, res, next) => {
  try {
    const movies = await MovieModel.find();
    console.log({ movies });
    res.render("movies", { movies });
  } catch (error) {
    next(error);
  }
});

router.get("/movies/:id", async (req, res, next) => {
  try {
    const movie = await MovieModel.findById(req.params.id);
    res.render("movie-details", movie);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
