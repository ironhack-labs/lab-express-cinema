const express = require("express");
const router = express.Router();
const { Movie } = require("../models/Movie.model");

router.get("/", async (req, res) => {
  const movies = await Movie.find({}).select("title image");
  res.render("movies", { movies });
});

router.get("/:id", async (req, res) => {
  const movieDetail = await Movie.findById(req.params.id);
  res.render("details", { movie: movieDetail });
});

module.exports = router;
