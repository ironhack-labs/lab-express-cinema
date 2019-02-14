const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
// console.log(Movie.find({}));
router.get('/movies', (req, res)=>{
  Movie.find({})
    .then(myMovies => {
      // console.log(myMovies);
      res.render('movies', {movie:myMovies})
    }).catch(error => {console.log(error)})
})

module.exports = router;
