const express = require("express");
const router = express.Router();
const Movie = require("./../models/Movie.model");
const hbs = require("hbs");

//ruta home
router.get("/", (req, res, next) => res.render("index"));

//ruta movies
router.get("/movies", async (req, res, next) => {
  const movies = await Movie.find();
  console.log(movies);
  res.render("movies", { movies });
});

//--------

// Movie detalles (falta comprobar)
router.get("/movieDetails/:id", async (req, res, next) => { // el movieDetails es como lo llamo en handerbs en index.hsb en al enlace
  const { id } = req.params;
  const movies = await Movie.findById(id);
  console.log(movies);
  res.render("movieDetails", { movies }); // el {movies} nombre, debe ser el mismo en handerbs movieDetails que aqui
});

module.exports = router; //exporto el router
