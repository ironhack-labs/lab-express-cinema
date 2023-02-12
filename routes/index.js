const express = require("express");
const MovieModel = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index.hbs"));

router.get("/movies", (req, res, next) => {
  MovieModel.find()
    .select("title image")
    .then((response) => {
      res.render("movies.hbs", {
        allMovies: response,
      });
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/movie/:movieId", (req, res, next) => {
  const { movieId } = req.params;

  MovieModel.findById(movieId)
    .then((response) => {
      res.render("movie/details.hbs", {
        oneMovie: response,
      });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
