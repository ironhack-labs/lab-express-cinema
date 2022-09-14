const express = require("express");
const router = express.Router();

//require movie model
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

//GET movies page
router.get("/movies", (req, res) => {
  Movie.find()
    .then((movies) => {
      console.log(movies);
      res.render("movies", { movies });
    })
    .catch((err) => console.log(err));
});

//GET movie detail
router.get("/movies/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render("details", { movie });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
