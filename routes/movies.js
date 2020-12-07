//AV

const express = require("express");
const Movie = require("../models/Moviemodel");
const router = new express.Router();

router.get("/movies", async (req, res) => {
  const allMovies = await Movie.find();
  console.log(allMovies);
  res.render("movies", { allMovies });
});

router.get("/movies/:id", async (req, res) => {
  try {
    const movieDetail = await Movie.findById(req.params.id);
    console.log(req.params.id);
    res.render("detailsMovie", { movieDetail });
    console.log({ movieDetail });
  } catch (err) {
    console.log(err);
  }
});

// router.get("/movies/:id([a-z0-9]{24})", async (req, res) => {
//   try {
//     const movieDetail = await Movie.findById(req.params.id);
//     res.render("detailsMovie", movieDetail);
//   } catch (err) {
//     console.log(err);
//   }
// });

module.exports = router;
