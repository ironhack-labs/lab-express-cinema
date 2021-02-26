const express = require("express");
const router = express.Router();

const Movies = require("./../models/Movie.model");

//* Get all the movies & display it into a view gallery
router.get("/", (req, res, next) => {
  Movies.find()
    .then((allMovies) => {
      const data = { movies: allMovies };
      res.render("movies", data);
    })
    .catch((err) => console.log(err));
});

//* Find a given movie and display its details
router.get("/:id", (req, res, next) => {
  Movies.findById(req.params.id)
    .then((selectedMovie) => {
      const data = { theMovie: selectedMovie };
      res.render("details", data);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
