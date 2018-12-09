const express = require("express");
const Movie = require("../models/movie");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//List the Movies
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("movies", { movies });
    })
    .catch(err => {
      console.log("error");
    });
});

//Display Movie Info
router.get("/movie/:id", (rep, res, next) => {
  Movie.findOne({ _id: req.params.id })
    .then(movie => {
      res.render("movie", { movie });
    })
    .catch(err => {
      console.log("error");
    });
});

module.exports = router;
