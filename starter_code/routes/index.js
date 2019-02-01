const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res) => {
  Movie.find()
    .then((data) => {
      // res.send(data);
      res.render('movies', { data });
    })
    .catch((err) => {
      console.log('Error', err);
    });
});

router.get('/specificMovie/:movieId', (req, res) => {
  Movie.find({ _id: req.params.movieId })
    .then((data) => {
      // res.send(data);
      console.log(data);
      res.render('specificMovie', { data });
    })
    .catch((err) => {
      console.log('Error', err);
    });
});

module.exports = router;
