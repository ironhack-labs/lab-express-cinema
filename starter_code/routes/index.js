const express = require("express");
const router = express.Router();
const Movies = require("../models/movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  console.log("Called /movies URl");
  Movies.find({})
    .then(allMovies => {
      // res.send(allMovies);
      res.render("movies", { movies: allMovies });
    })
    .catch(err => console.log(err));
});

router.get("/movies/:id", (req, res, next) => {
  console.log("Called /movie URl");
  console.log(req.params.id);
  Movies.findById(req.params.id)
    .then(movie => {
      // res.send(movie);
      res.render("movie", movie);
    })
    .catch(err => console.log(err));
});

module.exports = router;
