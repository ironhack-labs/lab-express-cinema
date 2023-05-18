const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
  Movie.find()
  .then((allMovies) => {
    console.log(allMovies)
    res.render('movies', {movies: allMovies})
  })
  .catch((err) => {
    console.log(err);
    res.render('error')
  })
});

// Create a new movie
router.get('/movies/new', (req, res) => {
  res.render('new-movie');
})

router.post('/movies/create', (req, res) => {
  Movie.create({
title: req.body.theTitle,
director: req.body.theDirector,
stars: req.body.theStars,
image: req.body.theImage,
description: req.body.theDescription,
showtimes: req.body.theShowtime
  })
  .then((response) => {
    res.redirect('/movies');
  })
  .catch((err) => {
    console.log(err);
  })
})




// Each movie
router.get('/movies/:theID', (req, res) => {
  Movie.findById(req.params.theID)
  .then((theMovie) => {
    res.render('movieDetails', {theMovie: theMovie});
  })
  .catch((err) => {
    console.log(err);
    res.render('error')
  })
})

// Update the movie
router.get('/movies/:id/edit', (req, res) => {
  Movie.findById(req.params.id)
  .then((theMovie) => {
    res.render('movie-edit', {theMovie: theMovie})
  })
});

router.post('/movies/:theID/update', (req, res) => {
  Movie.findByIdAndUpdate(req.params.theID, {
title: req.body.theTitle,
director: req.body.theDirector,
stars: req.body.theStars,
image: req.body.theImage,
description: req.body.theDescription,
showtimes: req.body.theShowtime
  })
  .then(() => {
    res.redirect('/movies/'+req.params.theID)
  })
});

// Delete
router.post('/movies/delete/:theID', (req, res) => {
  Movie.findByIdAndRemove(req.params.theID)
  .then(() => {
    res.redirect('/movies')
  })
})




module.exports = router;
