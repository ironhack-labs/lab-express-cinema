const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(movies => {
      console.log("DEBUG movies", movies);

      res.render("movies", { movies: movies });
    })
    .catch(err => {
      throw err;
    });
});

router.get("/movies/:movieId", (req, res, next) => {
  let myMovie = req.params.movieId;
  console.log("DEBUG myMovie", myMovie);
  Movie.findOne({ _id: myMovie })
    .then(movieOne => {
      console.log("DEBUG MOVIE", movieOne);
      res.render("movie-detail", movieOne);
    })
    .catch(err => {
      throw err;
    });
});


module.exports = router;
