const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));



router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((moviesArr) => {
      res.render('movies', { movies: moviesArr })
    })
    .catch((e) => {
      console.log('an error here!', e)
    })
});

router.get('/movies/create', (req, res, next) => {
  res.render('create-movie')
});



router.post('/movies/create', (req, res, next) => {



  const { title, director, image, description } = req.body;
  Movie.create({ title, director, image, description })

    .then((newMovieDet) => {
      console.log(newMovieDet._id)
      res.redirect(`/movies/${newMovieDet._id}`)
    })
    .catch((e) => {
      console.log('an error here!', e)
    })
});






router.get('/movies/:movieId', (req, res, next) => {
  const id = req.params.movieId;
  Movie.findById(id)
    .then((movieDetails) => {
      res.render('movie-details', { movie: movieDetails })
    })
    .catch((e) => {
      console.log('an error here!', e)
    })
});

router.get('/movies/:movieId/edit', (req, res, next) => {
  const id = req.params.movieId;
  Movie.findById(id)
    .then((movieDetails) => {
      res.render('movie-edit', { movie: movieDetails })
    })
    .catch((e) => {
      console.log('an error here!', e)
    })
});

router.post('/movies/:movieId/edit', (req, res, next) => {
  const id = req.params.movieId;
  const { title, director, stars, image, description, showtimes } = req.body;
  Movie.findByIdAndUpdate(id, { title, director, stars, image, description, showtimes })
    .then((updatedMovieDet) => {
      console.log(updatedMovieDet._id)
      res.redirect(`/movies/${updatedMovieDet._id}`)
    })
    .catch((e) => {
      console.log('an error here!', e)
    })
});


router.post('/movies/:movieId/delete', (req, res, next) => {
  const id = req.params.movieId;
  Movie.findByIdAndDelete(id)
    .then(() => {

      res.redirect(`/movies`)
    })
    .catch((e) => {
      console.log('an error here!', e)
    })
});






module.exports = router;
