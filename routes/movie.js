const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

//Get movies page
router.get("/", (req, res) => {
  Movie.find()
    .then((movies) => {
      console.log(movies);
      res.render("movies", { movies: movies });
    })
    .catch((err) => console.log(err));
});

router.get("/movie/:id", (req, res) => {
  const { id } = req.params;

  Movie.findById(id).then((movie) => {
    res.render("movies", { movie: movie });
  });
});

module.exports = router;
