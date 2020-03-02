const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');


router.get('/', (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render('movies', { movies })
      console.log(movies.length)
    })
    .catch()

});

// READ
router.get('/detail/:id', (req, res, next) => {
  const movieId = req.params.id
  Movie.findById(movieId)
    .then((movie) => {
      res.render('movieDetail', { movie })
    })
    .catch(error => console.log(error))

});


// UPDATE
router.get('/update/:id', (req, res, next) => {
  const movieId = req.params.id
  Movie.findById(movieId)
    .then((movie) => {
      res.render('updateMovie', { movie })
    })
    .catch(error => console.log(error))
});
router.post('/update/:id', (req, res, next) => {
  const movieId = req.params.id
  console.log(movieId)
  Movie.updateOne({ _id: movieId }, req.body)
    .then((movie) => {
      res.redirect(`/movies/detail/${movieId}`)
    })
    .catch(error => console.log(error))

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
  res.render('addMovie')
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



module.exports = router;
