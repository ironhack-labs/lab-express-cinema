const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res) => {
  Movie.find().then((movies) => {
    res.render("movies", { allMovies: movies });
  });
});

router.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  Movie.findById(id).then((movie) => {
    res.render("moviedetails", { movie: movie });
  });
});

module.exports = router;
