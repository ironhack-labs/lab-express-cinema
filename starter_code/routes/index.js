const express = require("express");
const router = express.Router();
const Movie = require("../models/Movies");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(Movie => {
      res.render("movies.hbs", Movie);
    })
    .catch(err => {
      next(err);
    });
});

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      console.log(movie);
      res.render("movie-detail.hbs", movie);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
