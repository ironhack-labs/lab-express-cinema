const express = require("express");
const Movies = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

//GET movies page
router.get("/movies", async (req, res, next) => {
    console.log("je suis bien lq")
  try {
    const movies = await Movies.find();
    console.log(movies);
    res.render("movies", { movies });
  } catch (error) {
    next(error);
    return error;
  }
});

module.exports = router;
