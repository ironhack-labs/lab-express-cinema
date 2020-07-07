const express = require('express');
const router = express.Router();
const movieModel = require("../models/movie.model");
const { get } = require('mongoose');

//movies router
router.get("/movies", (req, res) => {
    movieModel.find()
      .then((dbResult) => {
        res.render("movies", { movies: dbResult });
      })
      .catch((err) => {
        console.error(err);
      });
});
  

