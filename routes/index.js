const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

//display moviesArray from mongoDB to movies page
router.get("/movies", (req, res) => {
  Movies.find().then((moviesArray) => {
    console.log(moviesArray);
    res.render("movies", { moviesArray });
  });
});

router.get("/movies/:id", async (req, res) => {
  const { id } = req.params;
  const oneMovie = await Movies.findById(id);
  res.render("movie-detail", oneMovie);
});

module.exports = router;
