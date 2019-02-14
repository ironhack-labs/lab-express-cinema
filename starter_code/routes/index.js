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
    }).catch(err => {console.log(err)})
})

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
  .then(movie =>{
    res.render('movieInfo', {movie: movie});
  })
  .catch(err => {
    console.log('Error while retrieving movie details: ', err);
  })
});
module.exports = router;
