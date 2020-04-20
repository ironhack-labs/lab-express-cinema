const express = require("express");
const router = express.Router();
const Movie = require("../models/movie"); //movie.js

/* GET home page */
router.get("/", (req, res) => {
  console.log("in '/' in index.js now");
  res.render("index");
});

router.get("/movies", (req, res) => {
  console.log("in 'movies' in index.js now");

  Movie.find()
    .then((movie) => {
      console.log(movie);
      res.render("movies", { movie }); // '{ movie }' brackets needed here
    })
    .catch((error) => console.log(error));
});

router.get("/movie-info/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then((movieById) => {
      console.log(movieById);
      res.render("movie-info", movieById); // '..., movieById' w/o brackets here
    })
    .catch((error) => console.log(error));
});

module.exports = router;
