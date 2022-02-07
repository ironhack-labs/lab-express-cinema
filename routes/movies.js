const router = require("express").Router();
const Movie = require("../models/Movie.model");

//== Create route to /movies
router.get("/", (req, res, next) => {
  Movie.find()
    .then((moviesFromDB) => {
      res.render("movies/movies-list", { movies: moviesFromDB });
    })
    .catch((err) => {
      console.log("Error getting movies from DB...", err);
    });
});

module.exports = router;
