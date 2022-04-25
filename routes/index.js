const express = require("express");
const MovieModel = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  MovieModel.find()
    .then((findedMovies) => {
      res.render("movies", { data: findedMovies });
    })
    .catch((err) => console.log(Err));
});

router.get("/movies/:movieDetails", (req, res, next) => {
  const { movieDetails } = req.params;
  MovieModel.findById(movieDetails)
    .then((resultadoMovie) => {
      res.render("movieDetails", { movie: resultadoMovie });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
