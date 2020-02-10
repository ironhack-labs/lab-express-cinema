const express = require('express');
const router  = express.Router();
const movieModel = require("../models/Movie");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET movies page */
router.get('/movies', (req, res, next) => {
  movieModel
  .find()
  .then(movies => {
    res.render('movies', {movies});
  })
  .catch(dbErr => {
    console.log(dbErr);
  })
});

/* GET ONE movie page */
router.get('/movies/show/:id', (req, res, next) => {
  movieModel
  .findById(req.params.id)
  .then(movie => {
    res.render("movies/show", {movie});
  })
  .catch(dbErr => {
    console.log('Oups! You failed somewhere: ', dbErr);
  })
})

module.exports = router;