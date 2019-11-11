const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res) => {
  Movie.find()
    .then(movies => {
      res.render("movies", { moviesList: movies });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/movies/:title", (req, res) => {
  const title = req.params.title;
  Movie.findOne({ title: title })
    .then(movie => {
      res.render("movie", { movie });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
