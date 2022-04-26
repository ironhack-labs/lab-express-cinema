const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie.model.js");

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((moviesArr) => {
      console.log(`Retrieved movies from DB:`, moviesArr);
      res.render("movies.hbs", { movies: moviesArr });
    })
    .catch((error) => {
      console.log("Error getting movies from DB: ", error);
      next(error);
    });
});

router.get("/movie/:movieId", (req, res, next) => {
  const id = req.params.movieId;

  Movie.findById(id)
    .then((movieDetails) => {
      console.log(movieDetails);
      res.render("movie-details.hbs", movieDetails);
    })
    .catch((error) => {
      console.log("Error getting movie from DB: ", error);
      next(error);
    });
});
// CREATE: render form
router.get("/movie/create", (req, res, next) => {
  res.render("book-create");
});

// CREATE: process form
router.post("create", (req, res, next) => {
  const newMovie = {
    title: req.body.title,
    director: req.body.director,
    description: req.body.description,
  };

  Movie.create(newMovie)
    .then((movieFromDB) => {
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log("error creating movie on DB", err);
      next(err);
    });
});

// UPDATE: display form
router.get("/movies/:movieId/edit", (req, res, next) => {
  const id = req.params.movieId;
  Movie.findById(id)
    .then((movieDetails) => {
      res.render("movie-edit", movieDetails);
    })
    .catch((err) => {
      console.log("error getting movie details from DB", err);
      next(err);
    });
});

// UPDATE: process form
router.post("movieId/edit", (req, res, next) => {
  const id = req.params.movieId;

  const newDetails = {
    title: req.body.title,
    director: req.body.director,
    description: req.body.description,
  };

  Movie.findByIdAndUpdate(id, newDetails)
    .then((MovieFromDB) => {
      res.redirect(`/movies/${movieFromDB._id}`);
    })
    .catch((err) => {
      console.log("error updating movie in DB", err);
      next(err);
    });
});

module.exports = router;
