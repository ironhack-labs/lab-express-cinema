const express = require("express");
const Movie = require("../models/Movie.js");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find()
    .sort({ title: 1 })
    .then(movieResults => {
      res.locals.movieArray = movieResults;
      res.render("movies.hbs");
    })
    .catch(err => next(err));
});

router.get("/movie/:id", (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then(movieDoc => {
      //res.json(movieDoc);
      res.locals.movieItem = movieDoc;
      res.render("movie-details.hbs");
    })
    .catch(err => next(err));
});

module.exports = router;
