const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET moveis page */
router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('movies', { movies })
  })
  .catch(error => console.log(error))
});

module.exports = router;