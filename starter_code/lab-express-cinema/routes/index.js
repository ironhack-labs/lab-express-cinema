const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then((movies) => {
      //console.log("hola")
      res.render("movies", {movies})
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/movies/:id", (req, res, next) => {
  //console.log(req.params.id);
  let movieId = req.params.id;
  Movie.findOne({_id: movieId})
  .then((movie) => {
    res.render("detail", {movie})
  })
  .catch(error => {
    console.log(error);
  });
});

module.exports = router;
