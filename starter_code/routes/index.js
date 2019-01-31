const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next)=> {
  Movie.find() // Find all the movies (no filter)
  .then(movies => {
    console.log(movies)
    res.render('movies', {
      movies
    });
    })
    .catch(error => {
      console.log(error)
    })
})

router.get('/movie/:id', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findOne({'_id': movieId}) //Book.findById(bookId) is the same
    .then(movie => {
      res.render("movie-detail", { movie })
    })
    .catch(error => {
      console.log(error)
    })
});
module.exports = router;
