const express = require('express');
const Movie = require('../models/Movie');

const router = express.Router();

router.get('/:_id', (req, res) => {
  Movie.findById(req.params._id)
    .then((movie) => {
      res.render('movie', { movie });
    })
    .catch((err) => console.log('The error while searching albums occurred: ', err));
});

module.exports = router;
