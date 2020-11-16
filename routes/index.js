const express = require("express");
// const mongoose = require("mongoose");
const Movie = require("../models/Movie.model");
const router = express.Router();

/* GET home page */

router.get("/movies", (req, res) => {
  console.log("We are in movies page");
  Movie.find().then((allmovies) => {
    console.log(allmovies);
    res.render("movies", { movies: allmovies });
  });
});
router.get("/:id", (req, res) => {
  console.log("We are in movies page");
  Movie.findById(req.params.id).then((foundMovie) => {
    console.log(foundMovie);
    res.render("moviedetails", { movie: foundMovie });
  });
});

router.get("/", (req, res, next) => res.render("index"));

module.exports = router;
