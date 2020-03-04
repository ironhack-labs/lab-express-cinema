const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');
const fileMovies = require('../bin/seeds.js');

/* GET home page */
router.get('/', (req, res, next) => {
  //Movie.insertMany(fileMovies);
  res.render('index');
});



module.exports = router;
