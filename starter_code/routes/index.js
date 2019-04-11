const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/movies', (req, res, next) => {
  Movie.find().then(movie => console.log(movie));
});

router.get('/movie/:id', (req, res, next) => {

});

module.exports = router;