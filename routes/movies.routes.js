const express = require("express");
const router = express.Router();
const Movie = require("../models/movie.model");

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allTheMovies) => {
      console.log(allTheMovies[0]);
      res.render("movies/movies.hbs", { allTheMovies });
    })
    .catch((error) => console.log(`This is your error: ${error}`));
});

router.get("/movies/:movieID", (req, res) => {
  // res.send(req.params);
  const movieID = req.params.movieID;
  let array = movieID.split("");
  array.shift();
  let newID = array.join("");
  console.log(newID);
  console.log(movieID);
  Movie.findById(newID)
    .then((movie) => {
      console.log(movie);
      res.render("movies/movie-details", { movie: movie });
    })
    .catch((error) => console.log(`This is your error: ${error}`));
});

module.exports = router;
