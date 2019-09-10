const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies/", (req, res, next) => {
  Movie.find().then(mov => {
    res.render("movies", { movieList: mov });
  });
});

router.get("/movies/:movieid", (req, res) => {
  const movieid = req.params.movieid;

  console.log("movie: " + movieid);

  Movie.findById(movieid).then(mov => {
    res.render("movie", { movie: mov });
  });
});

module.exports = router;
