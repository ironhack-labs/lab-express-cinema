const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

router.get("/movies", (req, resp, next) => {
  Movie.find().then((movies) => {
    console.log(movies);
    resp.render("movies", { movies });
  });
});

module.exports = router;
