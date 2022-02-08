const express = require("express");
const Movie = require("../models/Movie.model");
const router = express.Router();

router.get("/", (req, res, next) => {
  Movie.find()
    .then((moviesFromDB) => {
      //console.log(movies);
      res.render("movies/movies", { movies: moviesFromDB });
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

router.get("/create", (req, res, next) => {
  res.render("movies/movie-create");
});

router.post("/create", (req, res, next) => {
  const movie = {
    image: "https://via.placeholder.com/200x300",
    title: req.body.title,
    director: req.body.director,
    stars: req.body.stars,
    description: req.body.description,
    time: req.body.showtimes,
  };
  Movie.create(movie)
    .then((movie) => {
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log("error", err);
    });
});

router.get("/:movieId", (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((movie) => {
      res.render("movies/movie-details", movie);
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

router.get("/:movieId/edit", (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((movieToEdit) => {
      res.render("movies/movie-edit", movieToEdit);
    })
    .catch((err) => {
      console.log("error", err);
    });
});

router.post("/:movieId/edit", (req, res, next) => {
  const { movieId } = req.params;
  let starsArr = req.body.stars.split("");

  const movie = {
    title: req.body.title,
    director: req.body.director,
    stars: starsArr,
    description: req.body.description,
    time: req.body.showtimes,
  };
  Movie.findByIdAndUpdate(movieId, movie)
    .then(() => res.redirect(`/movies/${movieId}`))
    .catch((err) => {
      console.log("error", err);
    });
});

router.post("/:movieId/delete", (req, res, next) => {
  Movie.findByIdAndDelete(req.params.movieId)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log("error", err);
    });
});

module.exports = router;
