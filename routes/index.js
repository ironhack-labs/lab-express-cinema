const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');


/* GET home page */
router.get('/', (req, res, next) => { 
    res.render('index')});

router.get('/movies', (req, res, next) => {
    Movie.find()
      .then((movies) => {
        res.render('movies', { movies });
      })
      .catch((err) => {
        console.log('Error retrieving movies: ', err);
        res.render('error'); // Render an error page if there is an error
      });
  });

module.exports = router;
