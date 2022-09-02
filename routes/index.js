const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  MovieModel.find()
    .then((movies) => {
      const filteredMovies = movies.map((movie) => {
        const { title, image, id } = movie;
        return { title, image, id };
      });
      res.render("movies", { filteredMovies });
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/movie/:movieId", (req, res, next) => {
  const { movieId } = req.params;
  MovieModel.findById(movieId)
    .then((movie) => {
      //   console.log(movie);
      res.render("movie", movie);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
