const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("movies", { movieArray: movies });
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/movies/:movieId", (req, res, next) => {
  Movie.findOne({ _id: req.params.movieId })
    .then(document => {
      res.render("details", { movie: document });
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
