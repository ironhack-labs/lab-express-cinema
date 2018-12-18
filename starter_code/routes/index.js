const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res) => {
  Movie.find().then(movies => {
    res.render("movies", { moviesArr: movies });
  });
});

router.get("/movieinfo/:movieid", (req, res) => {
  Movie.findOne({ _id: req.params.movieid }).then(movies => {
    res.render("movieinfo", { moviesArr: movies });
  });
});

module.exports = router;
