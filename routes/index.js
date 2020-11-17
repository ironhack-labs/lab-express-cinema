const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

//First: get the movies from the database
router.get("/movies", (req, res) => {
  Movie.find({}).then((allMovies) => {
    console.log("The movies found are: ", allMovies);
    res.render("movies", { allMovies });
  });
});

router.get("/movies/:_id", (req, res) => {
  let id = req.params._id;
  console.log("the movie id", id);
  Movie.find({ _id: id }).then((movie) => {
    console.log("Found:", movie);
    res.render("singleMovie", { movie });
  });
});

// Movie.create(movies)
//   .then((moviesFromDB) => {
//     console.log(`Created ${moviesFromDB.length} movies`);

module.exports = router;
