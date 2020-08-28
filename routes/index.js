const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", async (req, res) => {
  const movies = await Movie.find();
  res.render("movies", { movies });
});

// router.get("/movie/:movieID", async (req, res) => {
//   const { movieID } = req.params;
//   const movie = await Movie.find({ _id: `${movieID}` });
//   console.log(movieTitle);
//   res.render("movieDetails", movie);
// });

router.get("/movie/:movieID", async (req, res) => {
  const movieId = req.params.movieID;
  const data = await Movie.findOne({ _id: movieId });
  res.render("movieDetails", data);
});

module.exports = router;
