const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js'); // <== add this line before your routes

/* GET home page */
router.get('/movie', (req, res, next) => {

    Movie.find()
    .then(movie => {
      console.log('Retrieved movie from DB:', movie);
      res.render('movie',{movie :movie})

    })
    .catch(error => {
      console.log('Error while getting the books from the DB: ', error);

      // Call the error-middleware to display the error page to the user
      next(error);
    });

});

module.exports = router;
