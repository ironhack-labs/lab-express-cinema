require("dotenv").config();
const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie");

router.get("/", (req, res, next) => {
  Movie.find({})
    .then(allTheMovies => {
      console.log("Estas son todas las peliculas encontradas", allTheMovies);
      res.render("movies", { movies: allTheMovies });
    })
    .catch(err => console.log("Ha ocurrido un error:", err));
});

module.exports = router;
