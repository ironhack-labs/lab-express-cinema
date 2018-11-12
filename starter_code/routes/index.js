const express = require('express');
const router  = express.Router();
const Movie = require("../models/movie.js");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req, res, next) => {
  Movie.find()
  .then((movieArray) =>{
    res.locals.movieArray = movieArray;
    res.render("movies");
  })
  .catch(err => next(err));

});

router.get('/movie/:id', (req, res, next) => {
  const { id } = req.params;

  Movie.findById(id)
  .then(movieNew => {
    res.locals.movieId = movieNew;
    res.render("movieinfo.hbs");
  })
  .catch(err => next(err));
})

module.exports = router;
