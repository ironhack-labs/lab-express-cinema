const express = require("express");
const { Movie } = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", async (req, res) => {
  const moviesFromDB = await Movie.find();
  console.log(moviesFromDB);

  res.render("movies", { movies: moviesFromDB });
  // res.render("movies", {
  //   moviesFromDB: moviesFromDB.map((movie) => {
  //     const slug = movie.showtimes.join(" | ");
  //     console.log(movie.showtimes);
  //     console.log(slug);

  //     const improvedMovie = { ...movie._doc, slug };
  //     return improvedMovie;
  //   }),
  // });
});

// router.post("/movies", () => {});

router.get("/movies/:movieId", async (req, res, next) => {
  const { movieId } = req.params;
  const theMovie = await Movie.findById(movieId);
  console.log(theMovie);

  res.render("movie-details", { movie: theMovie });
});

module.exports = router;
