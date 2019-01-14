const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//Get movies
router.get("/movies", (req, res) => {
  //Here we make the database Query
  Movie.find()
    .then(movies => {
      res.render("movies", { movies });
    })
    .catch(error => {
      console.log(error);
    });
});

//Get movie info
router.get("/movies/:id", (req, res) => {
  let movieId = req.params.id;
  Movie.findOne({ _id: movieId })
    .then(movie => {
      res.render("movie-info", movie);
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
