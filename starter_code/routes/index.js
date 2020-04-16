const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then((dbResult) => res.render("movies", { movies: dbResult }))
    .catch((err) => console.log(err));
});

router.get("/movie/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((dbResult) => {
      res.render("movie", { movie: dbResult });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
