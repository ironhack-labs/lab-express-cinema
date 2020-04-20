const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie')

/* GET movieinfo page */
router.get('/movie/:id', (req, res) => {
  const movieId = req.params.id;
  //req.params.parameter has to match GET '/movie/:placeholder'
  //The captured values are stored in the req.params object using the parameter names as keys (e.g. req.params.your_parameter_name).
  Movie.findById(movieId)
  .then(movie => {
    console.log('this is a movie:', movie);
    res.render('movie-info', {movieInfo: movie});
  });
});


module.exports = router;