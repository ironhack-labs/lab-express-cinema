const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => {
  Movie.find()
    .then((moviesArray) => {
      res.render("movies", { movies: moviesArray });
      console.log(moviesArray);
    })
    .catch();
});

router.get("/:id", (req, res, next) => {
  console.log(req.params);
  Movie.findById(req.params.id)
    .then((singleMovie) => {
      res.render("moviedetails", { movie: singleMovie });
    })
    .catch();
});

module.exports = router;
