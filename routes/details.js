const express = require('express');
const router = express.Router();
const MoviesModel = require('./../models/Movie.model');

router.get('/:id', function (req, res, next) {
  
    
    MoviesModel.findById(req.params.id)
        .then((movieId) => res.render('details.hbs', {movieId}))
        .catch(next);
      
  });
  
  module.exports = router;

