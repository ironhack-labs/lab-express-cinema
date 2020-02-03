const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movies.find({})
    .then(movieDocuments => {
      res.render("movies", { moviesList: movieDocuments });
    })
    .catch(err => {
      next(err);
    });
  // res.send(moviesArr);
  // res.render("movies", { moviesList: movies });
});

router.get("/movies/:movieId", (req, res, next) => {
  Movies.findById(req.params.movieId)
    .then(movieDocument => {
      res.render("moviePage", movieDocument);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
