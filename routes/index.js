const express = require("express");
const router = express.Router();
const Movie = require("./../models/Movie.model");
const hbs = require("hbs");

//ruta home
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res) => {
  Movie.find()
    .then((movies) => {
      // console.log(movies);
      res.render("movies", { movies });
    })
    .catch((err) => console.log(err));
});

router.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  Movie.findById(id)
    .then((movie) => {
      console.log(movie);
      res.render("movieDetails", { movie });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
