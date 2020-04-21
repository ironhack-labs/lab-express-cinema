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

module.exports = router;
