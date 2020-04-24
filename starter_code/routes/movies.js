const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/", (req, res, next) => {
  console.log("hola");
  Movie.find().then((movies) => {
    console.log(movies);
    res.render("movies", { MovieList: movies });
  });
});

router.get("/:id", (req, res, next) => {
  console.log("reading detail route");

  console.log(req.params.id);
  Movie.findById(req.params.id).then((movie) => {
    console.log(movie);
    res.render("details", { movie: movie });
  });
});

module.exports = router;
