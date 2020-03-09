const express = require("express");
const Movie = require("../models/Movie");
const mongoose = require("mongoose");

const router = express.Router();

router.get("/", (req, res) => {
  Movie.find()
    .then(movies => {
      res.render("movies", { movies });
    })
    .catch(error => {
      console.error(error);
    });
});

router.get("/movie/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render("movie", { movie });
    })
    .catch(err =>
      console.log("The error while searching albums occurred: ", err)
    );
});

module.exports = router;
