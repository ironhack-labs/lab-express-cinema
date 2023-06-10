const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((moviesFromDB) => {
      console.log(moviesFromDB);
      res.render("movies", { movies: moviesFromDB });
    })
    .catch((error) => {
      next(error);
    });
});
module.exports = router;
