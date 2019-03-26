const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie')

// movies page
router.route('/')
  .get((req, res, next) => { 
    Movies.find({})
      .then(results => {
        res.render('movies.hbs', {movie: results});
      })
      .catch(err => {
        console.log(err);
      })
  });

router.route('/:id')
  .get((req, res, next) => {
    Movies.findOne({_id: req.params.id})
      .then(result => {
        // res.send(result);
        res.render('movie-details.hbs', result);
      })
      .catch(err => {
        console.log(err);
      })
  })

  module.exports = router;