const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movies => {
    console.log("IN MOVIES GET")
    res.render('movies',{movies});
  })
  .catch(err => {
    console.log("Can't get any movie")
  })
 
});

router.get('/movie/:id', (req, res, next) => {
  let movieId=req.params.id;
  Movie.findOne({'_id':movieId})
  .then(movie => {
    console.log("IN MOVIES GET")
    res.render('movie-details',{movie});
  })
  .catch(err => {
    console.log("Can't get the details about the movie")
  })

});

module.exports = router;
