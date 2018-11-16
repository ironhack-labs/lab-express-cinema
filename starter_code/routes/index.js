const express = require('express');
const router  = express.Router();


const mongoose = require('mongoose');
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {

  Movie.find({title: {$exists: true}})
  .then(movies => {
    console.log(movies)
    res.render("movies", { movies });
  })
  .catch(error => {
    console.log(error)
  })

});

module.exports = router;
