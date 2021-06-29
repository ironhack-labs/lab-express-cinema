const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie.model");

router.get("/", (req, res, next) => {
  Movies.find()
    .then((movies) => {
      console.log(movies);
      res.render("movies", { movies });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
