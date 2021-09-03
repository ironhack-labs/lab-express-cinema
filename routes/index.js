const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res) => {
  Movie.find().then((movies) => res.render("movies", { movies }));
});

router.get("/movies/:movies_id", (req, res) => {
  const { movies_id } = req.params;

  Movie.findById(movies_id)
    .then((theMovies) => {
      res.render("details", theMovies);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
