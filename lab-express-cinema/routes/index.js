const express = require('express');
const router  = express.Router();

const movies = require('../models/data');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/movies", (req, res, next) =>{
  console.log(movies);
  res.render('movies', {movies});
});

router.get('/movies/:id', (req, res, next) => {
  index = movies.findIndex(function(oneMovie){
    return oneMovie.title === req.params.id;
  })
  chosenMovie = movies[index];
  res.render('showtimes', {chosenMovie});
});

module.exports = router;
