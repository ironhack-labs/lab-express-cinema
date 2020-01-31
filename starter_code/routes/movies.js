const express = require("express");
const router = express.Router();
const db = require("../models/crud");

/* GET all movies */
router.get("/movies", async (req, res, next) => {
  try {
    const movies = await db.listMovies();
    res.render("movies", { movies });
  } catch (err) {
    console.log(err);
  }
});

/* GET a movie */
router.get("/movie/:id", async (req, res) => {
  try {
    const movie = await db.viewMovie(req.params.id);
    res.render("movie", movie);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
