const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");

//Ruta para todas las pelis

router.get("/", (req, res, next) => {
    Movie.find()
      .then((movies) => {
        res.render("movies/movies", { movies });
      })
      .catch((err) => {
        console.log(
          "The following error occured while accessing the movies: ",
          err
        );
      });
  });