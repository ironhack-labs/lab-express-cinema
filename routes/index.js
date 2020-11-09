const express = require("express");
const MovieModel = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res) => {
  MovieModel.find({})
    .then((movies) => res.render("movies", { movies }))
    .catch((err) => console.error(err));
});

router.get("/movie/:id", (req, res) => {
  const { id } = req.params;
  MovieModel.findOne({ _id: id })
    .then((movie) => res.render("movie", { movie }))
    .catch((err) => console.log(err));
});

module.exports = router;
