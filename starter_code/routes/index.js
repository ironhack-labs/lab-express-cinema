const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.js");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
router.get("/movies", (req, res, next) => {
  Movie.find().then(data => {
    res.render("movies", { data });
  });
});
router.get("/movie_info/:id", (req, res, next) => {
  let movieId = req.params.id;
  Movie.findOne({ _id: movieId })
    .then(data => {
      res.render("movie_info", { data });
    })
    .catch(error => {
      console.log(error);
    });
});
module.exports = router;
