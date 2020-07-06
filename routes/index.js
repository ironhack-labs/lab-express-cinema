const express = require("express");
const router = express.Router();

const movieModel = require("./../models/Movie.model.js");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  movieModel
    .find()
    .then((movies) => {
      res.render("movies", { movies });
    })
    .catch(next);
});

router.get("/movie/:id", (req, res, next) => {
  movieModel
    .findById(req.params.id)
    .then((movie) => {
      res.render("movie", { movie });
    })
    .catch(next);
});

module.exports = router;
