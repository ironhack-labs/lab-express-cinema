const express = require('express');
const router  = express.Router();
const Movies = require("../models/Movies");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res) => {
  Movies
    .find()
    .select({ title: 1, image: 1 })
    .then(movies => {
      res.render("movies", {movies});
    });
});

router.get("/movies/:id", (req, res) => {
  console.log(req.params.id);
  Movies
    .findById(req.params.id)
    .then(movie => {
      res.render("info", movie);
    });
});

module.exports = router;
