const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  MovieModel.find()
    .then((allMovies) => {
      res.render("movies", { allMovies });
    })
    .catch((error) => next(error));
});

router.get("/moviedetails/:id", (req, res, next) => {
  MovieModel.findById(req.params.id)
    .then((movieById) => {
      res.render("moviedetails", { movieById });
    })
    .catch((error) => next(error));
});

module.exports = router;
