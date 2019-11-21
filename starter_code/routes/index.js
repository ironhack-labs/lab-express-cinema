const express = require("express");
const router = express.Router();

const Movies = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movies.find({})
    .then(documents => {
      res.render("movies", {
        movies: documents
      });
    })
    .catch(err => console.log(err));
});

router.get("/movies/:movieId", (req, res, next) => {
  Movies.findById(req.params.movieId)
    .then(movie => {
      res.render("movieInfo", {
        movie
      });
    })
    .catch(err => console.log(err));
});

module.exports = router;
const express = require("express");
const router = express.Router();

const Movies = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movies.find({})
    .then(documents => {
      res.render("movies", {
        movies: documents
      });
    })
    .catch(err => console.log(err));
});

router.get("/movies/:movieId", (req, res, next) => {
  Movies.findById(req.params.movieId)
    .then(movie => {
      res.render("movieInfo", {
        movie
      });
    })
    .catch(err => console.log(err));
});