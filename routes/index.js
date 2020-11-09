const express = require("express");
const MovieModel = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  MovieModel.find().then((moviesfromDB) => {
    res.render("movies", { moviesfromDB });
  });
});

router.get("/movies/:id", (req, res, next) => {
  const movieId = req.params.id;
  MovieModel.findById({ _id: movieId })
    .then((movie) => {
      console.log(movie);
      res.render("moviePage", { movie });
    })
    .catch((err) => console.error(err));
});
module.exports = router;
