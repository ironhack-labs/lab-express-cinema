const express = require("express");
const router = express.Router();

const movieModel = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  movieModel
    .find()
    .then((movie) => {
      // console.log('something', movie)
      res.render("movies", { movie: movie });
    })
    .catch((error) => {
      console.log("Error while getting the movies from the DB: ", error);
      next();
    });
});

router.get("/movies/:id", (req, res, next) => {
  movieModel
    .findById(req.params.id)
    .then((movie) => {
      // console.log('something', movie)
      res.render("see", { movie: movie });
    })
    .catch((error) => {
      console.log("Error: ", error);
      next();
    });
});

module.exports = router;
