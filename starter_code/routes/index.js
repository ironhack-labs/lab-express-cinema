const express = require('express');
const router  = express.Router();
const mongoose = require("mongoose");
const Movie = require("../models/Movie");

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  mongoose.connect('mongodb://localhost/starter-code', {useNewUrlParser: true, useUnifiedTopology: true});
  Movie.find()
    .then(data => {
      console.log(`The data ${data} has been retrieved from the database!`);
      res.render('movies', {movies: data});
    })
    .catch(error => console.error(`Not again! An error happened while retrieving data from the database: ${error}`));
});

router.get('/movies/:id', (req, res, next) => {
  mongoose.connect('mongodb://localhost/starter-code', {useNewUrlParser: true, useUnifiedTopology: true});
  Movie.findById(req.params.id).then(movie => res.render('movie-details', {movie: movie}));
});
module.exports = router;
