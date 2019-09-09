const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find().then(movies => {
    res.render("movies", { movieList: movies });
  });
});
router.get("/movie/:id", (req, res, next) => {
  Movie.findOne({ _id: req.params.id }).then(movie => {
    res.render("movieDetail", { movie });
  });
});

module.exports = router;
