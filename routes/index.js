const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));
router.get("/movies", (req, res) => {
  Movie.find().then((allmovies) => {
    res.render("movies", allmovies);
  });
  // console.log("BUSCANDO", movies.name);
  // res.render("movies", Movie.find());
});
router.get("/movie/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      console.log(movie);
      res.render("movie", movie);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
