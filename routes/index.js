const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res) => {
  Movie.find().then((data) => {
    res.render("movies", { data: data });
  });
});

router.get("/movie/:id", (req, res) => {
  const id = req.params.id;

  Movie.findById(id).then((movie) => {
    console.log(movie);
    res.render("moviedetails", movie);
  });
});

module.exports = router;
