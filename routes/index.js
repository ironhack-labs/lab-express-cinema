const express = require("express");
const router = express.Router();
const Movie = require("./../models/movie-model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allMovies) => {
      const data = {
        allMovies: allMovies,
      };

      res.render("movies", data);
    })
    .catch((err) => console.log(err));
});

router.get("/movies/:movieId", (req, res, next) => {
    const movieId = req.params.movieId;
    Movie.findById(movieId)
      .then((oneMovie) => {
        const data = {
          oneMovie: oneMovie,
        };
  
        res.render("onemovie", data);
      })
      .catch((err) => console.log(err));
  });

module.exports = router;
