const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie");


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



router.get('/movies', (req, res, next) => {
  Movie.find({}).then(data => {
    res.render('movies', {data});
    console.log(Movie)
  })
  
});


module.exports = router;
