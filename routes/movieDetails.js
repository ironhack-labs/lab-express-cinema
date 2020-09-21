const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie.model");

router.get("/movies/:id", async (req, res, next) => {
  try {
    const selectedMovie = await MovieModel.findById(req.params.id);
    res.render("movieDetails", { selectedMovie });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
