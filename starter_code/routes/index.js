const express = require("express");
const router = express.Router();
const Movies = require("../models/movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movies.find().then(moviesFound => res.render("movies", {moviesFound}));

});

router.get("/movie/:Id", (req, res, next) => {
  let {Id} = req.params;
  Movies.findById(Id).then(movieFound => res.render("movie", movieFound));

});

module.exports = router;

