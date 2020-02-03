const express = require('express');
const router  = express.Router();

/* GET home page */
const movieModel = require("../models/movies");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  movieModel.find()
  .then(movies => {
    res.render("movies", { movies: movies });
  })
  .catch(err => {
    console.log(err);
  });
});

router.get("/movie/:id", (req, res) => {
  movieModel.findById(req.params.id)
  .then(movie => {
    res.render("movie", { movie });
  })
  .catch(err => {
    console.log(err);
  });
});


module.exports = router;
