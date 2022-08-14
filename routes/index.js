const express = require("express");
const router = express.Router();
const MovieModel = require("../models/Movie.model");
const movies = require("../seeds/movies.seeds"); // call the seeds file into the routes file to get the movie database

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

/*GET all movies page */
router.get("/movies", (req, res) => {
  res.render("movies", { movies });
});

module.exports = router;
