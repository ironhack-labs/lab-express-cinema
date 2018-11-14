const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("movies", { movies });
    })
    .catch(err => {
      console.log("error");
    });
});

router.get("/movie/:id", (req, res, next) => {
  let movieId = req.params.id;
  Movie.findOne({ _id: movieId }).then(movie => {
    res.render("movie", { movie });
  });
});

module.exports = router;
