const express = require("express");
const router = express.Router();
const { Movie } = require("../models/Movie.model");

router.get("/", async (req, res) => {
  const movies = await Movie.find({}).select("title image");
  res.render("movies", { movies });
});

router.get("/:id", async (req, res) => {
  const movieDetail = await Movie.findById(req.params.id);
  const cast = movieDetail.stars.reduce((a, c) => {
    a[c] = c;
    return a;
  }, {});
  res.render("details", { movie: movieDetail, cast });
  console.log(movieDetail);
  console.log(cast);
});

module.exports = router;
