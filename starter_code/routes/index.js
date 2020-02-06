const express = require("express");
const router = express.Router();
const Movies = require("../models/Movies");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/movies', (req, res, next) => {
  Movies.find().then(allMovies => {
    res.render('movies', { allMovies });
  });
});

router.get('/movie/:id', (req, res, next) => {
  let { id } = req.params
  Movies.findById(id).then(movieDetail => {
    res.render('movieDetail', { movieDetail });
  });
});


module.exports = router;
