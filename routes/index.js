const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  //   Movie.find().then((result) => res.render("movies", { result })).catch(err => console.log(err));
  Movie.find()
    .then((result) => res.render("movies", { result }))
    // .then(() => mongoose.connection.close())
    .catch((err) => console.log(err));
});

router.get("/movies/:id", (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id).then((result) => {
      const { title, image, director, stars, description, showtimes } = result
      res.render("movie-details", { title, image, director, stars, description, showtimes })
  });
});

module.exports = router;
