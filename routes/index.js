const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((result) => {
      res.render("movies.hbs", { movies: result });
    })
    .catch(next);
});

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render("movies_detail.hbs", { movie: movie });
    })
    .catch(next);
});

module.exports = router;
