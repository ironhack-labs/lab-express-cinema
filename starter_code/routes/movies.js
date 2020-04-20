const express = require("express");
const router = express.Router();
const movies = require("../models/movies");
router.get("/movies", (req, res) => {
  movies.find().then((mvs) => {
    res.render("movies", { movList: mvs });
  });
});
router.get("/movies/:id", (req, res) => {
  const movieId = req.params.id;
  movies.findById(movieId).then((mov) => {
    res.render("movieDetails", { movie: mov });
  });
});
module.exports = router;
