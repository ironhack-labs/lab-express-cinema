const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('movie-detail/:id'), (req, res, next) => {
  let movieId = req.params.id;
  Movie.findOne({'_id':movieId})
  .then(movie => {
    console.log({movie});
    res.render('movie-detail', { movie })
  })
  .catch(error => {
    console.log(error)
  })
}

/* GET movies page */

const Movie = require('../models/movie.js')

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('movies', {movies});
  })
  .catch(error => {
    console.log(error)
  })
});





module.exports = router;

