const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET movie detail page */

router.get('/movie-details/:movieId', (req, res) => {
    const { movieId } = req.params;
   
    Movie.findOne({_id: movieId})
      .then(theMovie => res.render('movie-details', { theMovie }))
      .catch(error => console.log('Error while retrieving movie details: ', error));
  });

module.exports = router;
