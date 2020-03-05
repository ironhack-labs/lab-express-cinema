const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.js')

/* GET home page */
//READ
router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('movies', {movies: movies});
  })
});

router.get('/movie/:id', (req, res, next) => {
  Movie.findOne({_id: req.params.id})  
  .then(movie => {
    res.render('movie', {movie});
  })
});

// DELETE
router.post('/:id/delete', (req, res, next) => {
  const movieId = req.params.id
  Movie.deleteOne({ _id: movieId })
    .then(() => {
      res.redirect("/movies")
    })
    .catch(error => console.log(error))
});


// CREATE
router.get('/add', (req, res, next) => {
  res.render('add')
});
router.post('/add', (req, res, next) => {
  const newMovie = new Movie(req.body)
  Movie.insertMany(newMovie)
    .then(() => {
      console.log("inserted")
      res.redirect("/movies")
    })
    .catch(error => console.log(error))
});

//UPDATE
router.get('/update/:id', (req, res, next) => {
  const movieId = req.params.id
  Movie.findById(movieId)
    .then((movie) => {
      res.render('update', { movie })
    })
    .catch(error => console.log(error))
});
router.post('/update/:id', (req, res, next) => {
  const movieId = req.params.id
  console.log(movieId)
  Movie.updateOne({ _id: movieId }, req.body)
    .then((movie) => {
      res.redirect(`/movies`)
    })
    .catch(error => console.log(error))

});




module.exports = router; 