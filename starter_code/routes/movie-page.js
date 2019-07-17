const express = require('express');
const router  = express.Router();
const Movie     = require('../models/movie');


/* GET movie-page page */
router.get('/movie-page', (req, res, next) => {
  
  let clickedMovieId = req.query.id;
  
  Movie.find({_id: clickedMovieId})  
    .then((movie) => {console.log(movie);
        res.render('movie-page', movie[0])
      })
});

module.exports = router;
