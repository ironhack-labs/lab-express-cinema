const express = require("express");
const router = express.Router();
const Movies = require("../models/movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movies.find().then((movies) => {
    res.render("movies", { movies });
  });
});

router.get("/movie/:id", (req, res, next) => {
  Movies.find({'_id': req.params.id}).then((movie) => {
    // console.log(movie)
    res.render("movie", { movie: movie[0] });
  });
});

module.exports = router;
