const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie");

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(data => {
      console.log(`The data ${data} has been retrieved from the database!`);
      res.render('movies', {movies: data});
    })
    .catch(error => console.error(`Not again! An error happened while retrieving data from the database: ${error}`));
});

module.exports = router;
