const express = require("express");
const MovieModel = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index.hbs"));

router.get("/movies", (req, res, next) => {
  MovieModel.find()
    .select("title")
    .then((response) => {
      res.render("movies.hbs", {
        allMovies: response,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
