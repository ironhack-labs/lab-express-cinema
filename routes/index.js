const express = require("express");
const router = express.Router();
const movieModel = require("../models/Movie.model.js");

/* GET home page */

router.get("/", (req, res, next) => res.render("index"));

//Get Movies

router.get("/movies", async (req, res, next) => {
  try {
    let theMovies = await movieModel.find();
    res.render("movies", { theMovies, css: ["/stylesheets/allMovies.css"] });
  } catch (error) {
    console.log(error);
  }
});

router.get("/movie/:id", async (req, res, next) => {
  try {
    let theMovie = await movieModel.findById(req.params.id);
    res.render("movieDetails", {theMovie, css: ["/stylesheets/oneMovie.css"] });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
