const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res) => {
  Movie.find()
    .then((movies) => {
      // console.log("Películas recibidos desde la DB:", movies);

      res.render("movies", { movies });
    })

    .catch((err) => {
      console.log(err);
    });
});

router.get("/details/:movieId", (req, res) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .then((movie) => {
      res.render("details", { movie });
    })

    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
