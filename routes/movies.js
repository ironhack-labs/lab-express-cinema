const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET movies page with all Movies */
router.get("/movies", (req, res) => {
  Movie.find()
    .then((allTheMovies) => {
      //console.log("allTheMovies:", allTheMovies);
      res.render("movies", { movies: allTheMovies });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
});

module.exports = router;
