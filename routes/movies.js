const express = require('express');
const router = express.Router();
const Movies = require("../models/movieModel");

/* GET movies page */

router.get("/movies", (req, res, next) => {
    Movies.find()
      .then((allMoviesFromDB) => {
        res.render("movies", {
          movies: allMoviesFromDB,
        });
      })
      .catch((error) =>
        console.log(`Error while getting the movies from DB, ${error}`)
      );
  });

router.get("/movies/:id", (req, res, next) => {
    Movies.findById(req.params.id)
    .then((movie) => {
      res.render("movie-details", {
        movie: movie,
      });
    })
    .catch((error) =>
      console.log(`Error while getting the movies from DB, ${error}`)
    );
})


module.exports = router;
