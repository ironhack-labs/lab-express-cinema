const express = require("express");
const router = express.Router();

const Movie = require('../models/Movie.model.js')

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()

    .then((movies) => {
      res.render("movies", { movies });
      console.log(movies);
    })
    .catch((err) => console.log("error in movies", err));
});

router.get("/details/:id", (req, res, next) => {
  const id = req.params.id;

  Movie.findById(id)
    .then((movie) => {
      if (!movie) {
        return res.status(404).send("Movie not found");
      }
      res.render("details", { movie });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
});

module.exports = router;
