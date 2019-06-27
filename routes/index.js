const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET movies page */
router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(movies => {
      console.log("movies fetched: ", movies);
      res.render("movies", {
        movies: movies
      });
     
    })
    .catch(err => {
      console.log("An error occured: ", err);
    });
});

/* Get Detail Page */

router.get("/movie", (req, res, next) => {
  Movie.findById(req.query.movieId)
    .then(movie=> {
      console.log("movie clicked: ", movie);
      res.render("movie", {
        movie: movie
      });
     
    })
    .catch(err => {
      console.log("An error occured: ", err);
      res.redirect("/")
    });
});

module.exports = router;
