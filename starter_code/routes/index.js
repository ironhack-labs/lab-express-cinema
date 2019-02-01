const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(returnedMovies => {
      console.log(returnedMovies);
      res.render('movies', { returnedMovies });
      // res.send(returnedMovies);
    })
    .catch(error => {
      console.log(error);
    });
});
router.get('/movies/:id', (req, res, next) => {
  Movie.find({_id: req.params.id})
    .then(returnedMovie => {
      res.render('movies-details', { returnedMovie });
      // res.send(returnedMovies);
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
