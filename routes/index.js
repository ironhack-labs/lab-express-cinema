const express = require("express");
const Movies = require("../models/Movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

//GET movies page
router.get("/movies", async (req, res, next) => {
  try {
    const movies = await Movies.find();
    console.log(movies);
    res.render("movies", { movies });
  } catch (error) {
    next(error);
    return error;
  }
});

router.get("/movie/:id", async (req, res, next) => {
  try {
    const movieId = req.params.id;
    const dbResult = await Movies.findById(movieId);
    res.render("moviesDetail.hbs", { movies: dbResult });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
