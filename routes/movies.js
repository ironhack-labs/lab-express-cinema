const router = require("express").Router();
const Movie = require("../models/Movie.model");

router.get("/", (req, res, next) => {
  Movie.find()
    .then((moviesArr) => {
      res.render("movies/movies-list", { movies: moviesArr });
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

//

router.get("/create", (req, res, next) => {
  res.render("movies/movie-create");
});

router.post("/create", (req, res, next) => {
  const movieDetails = {
    title: req.body.title,
    director: req.body.director,
    stars: req.body.stars /*array*/,
    image: req.body.image,
    description: req.body.description,
    showtimes: req.body.showtimes /*array*/,
  };
  Movie.create(movieDetails)
    .then((movie) => {
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log("Error creating a new movie...", err);
    });
});

//

router.get("/:movieId", (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((movieId) => {
      res.render("movies/movies-details", { movie: movieId });
    })
    .catch("Can't find it sorry");
});

router.get("/:movieId/edit", (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((movieDetails) => {
      res.render("movies/movie-edit", { movie: movieDetails });
    })
    .catch((err) => {
      console.log("error getting movie details from db", err);
    });
});

router.post("/:movieId/edit", (req, res, next) => {
  const movieId = req.params.movieId;
  console.log(req.body.stars);
  const newDetails = {
    title: req.body.title,
    director: req.body.director,
    stars: req.body.stars.split(",") /*array*/,
    image: req.body.image,
    description: req.body.description,
    showtimes: req.body.showtimes /*array*/,
  };
  Movie.findByIdAndUpdate(movieId, newDetails)
    .then((movie) => {
      res.redirect(`/movies/${movieId}`);
    })
    .catch((err) => {
      console.log("error updating movie details...", err);
    });
});

router.post("/:movieId/delete", (req, res, next) => {
  Movie.findByIdAndDelete(req.params.movieId)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log("Error deleting movie...", err);
    });
});

module.exports = router;
