const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res) => {
  console.log("GET requerst on `/`");
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(documents => {
      //res.send(documents);
      res.render("movies", { movies: documents });
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

router.get("/movies/:movieId", (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(item => {
      //res.send(item);
      res.render("movieDetails", { movie: item });
    })
    .catch(err => console.log(`Error: ${err.message}`));
});

module.exports = router;
