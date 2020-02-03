const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(movieDocs => {
      console.log("movieDocs: ", movieDocs);
      res.render("movies", { movieList: movieDocs });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/movie/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movieDocs => {
      res.render("movieDetails", movieDocs);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
