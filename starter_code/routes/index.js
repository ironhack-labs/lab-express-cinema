const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(arrMovie => {
      res.render('movies', {arrMovie});
    })
    .catch(err => console.log(`error: ${err}`));
});

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(theMovie => {
      console.log(theMovie);
      res.render('movies-details', {theMovie});
    })
    .catch(error => {
      console.log('Error while retrieving book details: ', error);
    });
});

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
