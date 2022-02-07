const router = require("express").Router();
const Movie = require("../models/Movie.model");

router.get("/", (req, res, next) => {
  Movie.find()
    .then((moviesArr) => {
      res.render("movies/movies-list", { movies: moviesArr });
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

module.exports = router;
