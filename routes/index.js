const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res) => {
  Movie.find().then((results) => {
    res.render("movies", { results });
  });
});

router.get("/movie/:id", (req, res) => {
  Movie.findById(req.params.id).then((results) => {
    res.render("movie", { results });
  });
});
module.exports = router;
