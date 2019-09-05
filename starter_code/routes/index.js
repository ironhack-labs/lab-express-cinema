const express = require("express");
const router = express.Router();

/* GET home page */
const movies = require("../models/Movies");

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  movies
    .find({})
    .then(listOfMovies => {
      console.log(listOfMovies);
      res.render("movies", { listOfMovies });
    })
    .catch(err => console.log("Error", err));
});

router.get("/movies/detail/:id", (req, res) => {
  console.log(req.params.id);
  movies
    .findById(req.params.id)
    .then(movies =>
      res.render("show", {
        movies
      })
    )
    .catch(err => console.log(err));
});

module.exports = router;
