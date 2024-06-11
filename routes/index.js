const express = require("express");
const mongoose = require("mongoose");
const Movie = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render("movies", { movies: movies });
    })
    .catch((error) => {
      console.error("Error connecting to the database", error);
    });
});

router.get("/movie/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render("movie", { movie: movie });
    })
    .catch((error) => {
      console.error("Error connecting to the database", error);
    });
});

module.exports = router;
