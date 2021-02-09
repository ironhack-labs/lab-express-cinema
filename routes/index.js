const express = require("express");
const router = express.Router();
const Movie = require("./../models/Movie.model");

/* GET home page */

router.get('/', (req, res, next) => res.render('index'));



router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allMovies) => {
      const data = {
        movies: allMovies,
      };
      res.render("movies", data);
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((foundMovie) => {
      res.render("details", {foundMovie});
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

module.exports = router;
