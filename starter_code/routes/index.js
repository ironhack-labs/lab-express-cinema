const express = require('express');
const router  = express.Router();

const Movie = require('../model/movie.js')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find({}, (err, movies) =>{
    res.render('movies', {movies})
  })
});

router.get('/movie/:id', (req, res, next) => {
  let movieId = req.params.id;
  Movie.find({'_id': movieId}, (err, movies) => {
    res.render('movie-details', movies[0])
    console.log(movies)
  })
})

module.exports = router;
