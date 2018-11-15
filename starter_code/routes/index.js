const express = require('express');
const router  = express.Router();

const movie = require("../models/Movie");
const allmovies = require("../bin/seeds")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res) => {
  movie.collection.drop()
  movie.create(allmovies).then(movies => {
    res.render("movies", { movies });
  });
});

router.get("/moviecard/:id", (req, res) => {
  movie.findOne({ _id: req.params.id }).then(movie => {
    res.render("moviecard", { movie });
  });
});



module.exports = router;
