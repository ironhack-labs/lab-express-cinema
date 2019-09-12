const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Movie = require('../models/movie');

const dbName = 'ironCinema';
mongoose.connect(`mongodb://localhost/${dbName}`);

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(data => {
      res.render('movies', {
        data
      })
    })
    .catch(err => {
      console.log("error inserting many +++++++++++>>>>> ", err);
    })
})

router.get('/movies/:movieId', (req, res, next) => {
  Movie.find({
      _id: req.params.movieId
    })
    .then(data => {
      res.render('movie', {
        movie: data[0]
      })
      console.log(data)
    })
    .catch(err => {
      console.log("error inserting many +++++++++++>>>>> ", err);
    })
})

module.exports = router;