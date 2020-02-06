const express = require('express');
const router = express.Router();
const Movies = require('../models/movies')

/* GET home page */
router.get('/', (req, res, next) => {
  console.log(req.query)
  res.render('index');
});
router.get("/movies", (req, res, next) => {
  Movies.find().then(movie => res.render("movieList", {
    movie
  }));
});

router.get('/movie/:id', (req, res, next) => {
  let {
    id
  } = req.params
  Movies.findById(id).then(movieDetail => {
    res.render('movie', {
      movieDetail
    });
  });
});




module.exports = router;