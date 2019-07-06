const express = require('express');
const router  = express.Router();
const Movie = require('../models/movies');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//GET MOVIES
router.get('/movies', (req, res)=>{
  Movie.find()
    .then(data => {
      res.render('movies', {movies: data});
      console.log("The received data from the API: ", data);
    })
    .catch(err => {
      console.log("The error while searching artists occurred: ", err);
    });
});

module.exports = router;
