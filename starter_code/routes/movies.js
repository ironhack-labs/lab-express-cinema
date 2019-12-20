const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET movies page */
router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('movies', { movies })
  })
  .catch(error => console.log(error))
});

/* GET see more movie page */
router.get('/:Id', (req, res, next) => {
  let { Id } = req.params;
  Movie.findById(Id)
  .then(movies => {
    res.render('movie', movies )
  })
  .catch(error => console.log(error))
});

module.exports = router;