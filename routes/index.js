const express = require("express");
const { Mongoose, mongo } = require("mongoose");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  const { title } = req.query;

  Movie.find(title).then((movies) => {
    res.render("movies", { movies });
  });
});

router.get("/movies/:id", (req, res, next) => {
  const { id } = req.params;

  Movie.findById(id)
    .then((movie) => {
      res.render("detail", { movie });
    })
    .catch((err) => {
      res.render("not-found");
    });
});

module.exports = router;
