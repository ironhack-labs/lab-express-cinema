const express = require('express');
const router  = new express.Router();
const movieModel = require("../models/Movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET MOVIES PAGE */

router.get("/movies", (req, res) => {
  movieModel
    .find()
    .then(movies => {
      res.render("movies", {movies});
    })
    .catch(err => console.log(err));
});

router.get("/movies/:id", (req, res) => {
  movieModel
    .findById(req.params.id)
    .then(movie => {
      res.render("preview_movie", {movie});
    })
    .catch(err => console.log(err));
});

module.exports = router;
