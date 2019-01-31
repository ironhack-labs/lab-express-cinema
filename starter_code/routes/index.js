const express = require('express');
const router  = express.Router();
const Movie = require("../models/movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movies => res.render("movies", {movies}))
  .catch(err => console.log("An error ocurred: ", err))
});
router.get('/movie/:id', (req, res, next) => {
  Movie.findById(req.params.id,{_id: 0})
  .then(movie => res.render("movie", {movie}))
  .catch(err => console.log("An error ocurred: ", err))
});

module.exports = router;
