const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

//Get movies page
router.get("/", (req, res) => {
  Movie.find()
    .then((movies) => {
      console.log(movies);
      res.render("movies", { movies: movies });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
