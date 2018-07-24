var express = require('express');
const Movie = require('../models/movie')
var router = express.Router();

router.get('/', function (req, res, next) {
  Movie.find({})
  .then((movies)=>{
    console.log(movies.length)
    res.render('movies', { movies });
  })
  .catch((error)=>{
    next(error);
  })
});

module.exports = router; 