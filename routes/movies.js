const express = require('express');
const router  = express.Router();
const getMovie = require('../models/Movie.js');

router.get('/', (req, res, next) => {
  getMovie.find()
  .then((movies) => {
    res.render('movies', { movies });
  })
  .catch((err) => {
    console.log(err);
  })
});


module.exports = router;