const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie.model");

router.get("/", (req, res, next) => {
  Movies.find()
    .then((movies) => {
      res.render("movies", { movies });
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/:id", (req, res, next) => {
  console.log(req.params.id);
  const movieId = req.params.id;

  Movies.findById(movieId)
    .then((movieFromDB) => {
      console.log(movieFromDB);
      res.render("movie", { movieFromDB });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
