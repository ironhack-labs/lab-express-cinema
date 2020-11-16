const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model.js");
/* GET home page */
router.get("/", (req, res) => res.render("index"));

router.get("/movies", (req, res) => {
  Movie.find({}).then((allMovies) => {
    //console.log("Your movies are: ", allMovies);
    res.render("movies", { allMovies });
  });
});

router.get("/movies/:_id", (req, res) => {
  const desiredMovie = req.params._id;
  console.log("Your movie's id is: ", desiredMovie);
  Movie.find({ _id: desiredMovie }).then((movieId) => {
    //console.log("What you found is: ", movieId);
    res.render("moviepage", { movieId });
  });
});

module.exports = router;
