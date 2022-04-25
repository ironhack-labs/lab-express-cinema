const router = require("express").Router();
const Movie = require("../models/Movie.model");

router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movieArray) => {
      console.log(movieArray);
      res.render("movies/movie-list", { movies: movieArray });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/movies/create", (req, res, next) => {
  // console.log("request received");
  res.render("movies/movie-create");
});

router.post("/movies/create", (req, res, next) => {
  const newMovie = {
    title: req.body.title,
    director: req.body.director,
    description: req.body.description,
  };

  Movie.create(newMovie)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/movies/:movieId", (req, res, next) => {
  const id = req.params.movieId;
  Movie.findById(id)
    .then((data) => {
      res.render("movies/movie-info", data);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/movies/:movieId/edit", (req, res, next) => {
  const id = req.params.movieId;

  Movie.findById(id)
    .then((movieDetails) => {
      res.render("movies/movie-edit", movieDetails);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/movies/:movieId/edit", (req, res, next) => {
  const id = req.params.movieId;
  const updatedInfo = {
    title: req.body.title,
    director: req.body.director,
    description: req.body.description,
  };
  Movie.findByIdAndUpdate(id, updatedInfo)
    .then(() => {
      res.redirect(`/movies/${id}`);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
