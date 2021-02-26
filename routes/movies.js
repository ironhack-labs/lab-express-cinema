const express = require("express");
const router = express.Router();

const MovieModel = require("./../models/Movie.model");

router.get("/", (req, res, next) => {
  MovieModel.find()
  .then(dbMovies => {
    res.render("movies", { title: "Cinema Ironhack - Movies", moviesList: dbMovies });
  })
  .catch(error => console.log(error));
});

router.get("/:id", (req, res, next) => {
  MovieModel.findById(req.params.id)
  .then((moviePage) => {
    console.log(moviePage);
    res.render("singleMovie", { title: moviePage.title, movie: moviePage });
  })
  .catch(error => console.log(error));
});

module.exports = router;