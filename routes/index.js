const express = require("express");
const Movies = require("../models/Movie.model");
const info = require("../bin/seeds");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res) => {
  Movies.find({}).then((allMovies) => {
    res.render("movies", { movies: allMovies });
  });
  router.get("/info/:id", (req, res) => {
    Movies.findOne({ _id: req.params.id }).then((info) => {
      console.log();

      res.render("info", { info });
    });
  });
  // .catch((err) => {
  //   console.log("error while getting the movies", err);
  // });
});
module.exports = router;
