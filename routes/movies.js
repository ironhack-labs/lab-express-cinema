const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie.model");

router.get("/", (req, res, next) => {
  Movies.find()
    .then((allMoviesFromDB) => {
      res.render("movies", {
        movies: allMoviesFromDB,
        style: "moviesList",
      });
    })
    .catch((error) =>
      console.log(`Error while getting the movies from DB, ${error}`)
    );
});

router.get("/:id", (req, res, next) => {
  const { movieId } = req.params;
  Movies.findOne(movieId)
    .then((movie) =>
      res.render("movies-details", { movie: movie, style: "moviesDetails" })
    )
    .catch((error) =>
      console.log(`Error while retrieving movie details: ${error} `)
    );
});

module.exports = router;
