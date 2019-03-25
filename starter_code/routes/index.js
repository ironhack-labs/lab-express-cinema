const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(movies => {
      console.log(movies);
      res.render("movies", { movies });
    })
    .catch(err => {
      console.log("Error al recuperar las peliculas de la bd");
      console.log(err);
    });
});

router.get("/movie/:id", (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then(movie => {
      console.log(movie);
      res.render("movie", movie);
    })
    .catch(err => {
      console.log("Error al recuperar las peliculas de la bd");
      console.log(err);
    });
});

module.exports = router;
