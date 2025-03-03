const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res) => {
    Movie.find()
      .then((movies) => {
        res.render("movies", { movies });
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
      });
  });

  router.get("/movies/:id", (req, res) => {
    const movieId = req.params.id;
    Movie.findById(movieId)
      .then((movie) => {
        res.render("movie-details", { movie });
      })
      .catch((err) => {
        console.error("Error fetching movie details:", err);
      });
  });

module.exports = router;
