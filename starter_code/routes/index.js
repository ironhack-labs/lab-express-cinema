const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then(movieDocuments => {
      // res.send(movieDocuments);
      res.render("movies.hbs", { moviesList: movieDocuments });
    })
    .catch(err => {
      next(error.hbs);
    });
});

router.get("/movies/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movieDocument => {
      res.render("movieDetails.hbs", movieDocument);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
