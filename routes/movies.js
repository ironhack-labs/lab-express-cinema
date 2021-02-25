const express = require("express");
const router = express.Router();

const MovieModel = require("./../models/Movie.model");

router.get("/", (req, res, next) => {
  MovieModel.find()
  .then(dbMovies => {
    res.render("movies", {title: "Ironhack Cinema - Movies", moviesList: dbMovies});
  })
  .catch(error => console.log(error));
});

router.get("/movies/:id", (req, res, next) => {
  MovieModel.findById(req.params.id)
  .then((moviePage) => {
    res.render("singleMovie", { movie: moviePage});
  })
  .catch(error => console.log(error));
});

module.exports = router;