// Packages
const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');


// Get Home page
router.get('/', function(req, res) {
  Movie.find()
  .then( movies => {
    res.render("movies", {"tabtitle": "Movies", "moviesList": movies})
  })
  .catch( error => {
    console.error('Error reading movies!', error)
  })
});

// Create movie
router.get('/new', function(req, res) {
    res.render("movies/add", {"tabtitle": "Add movie"});
});

router.post('/', function(req, res) {
  const movie = req.body;
  Movie.create(movie)
  .then( () => {
    res.redirect("/movies");
  })
  .catch (error => {
    console.log(error);
  })
});

// Edit movie
router.get('/:id/edit', function(req, res) {
  const id = req.params.id;
  Movie.findById(id)
  .then(movie => {
    res.render("movies/edit", {"tabtitle": movie.title, "movie": movie})
  })
  .catch( error => {
    console.error(`Error reading movie with ${id}!`, error)
  })
});

router.post('/:id', function(req, res) {
  const id = req.params.id;
  const movie = req.body;
  Movie.findByIdAndUpdate(id, movie)
  .then( () => {
    res.redirect("/movies");
  })
  .catch (error => {
    console.log(error);
  })
});


// Delete movie

router.post('/:id/delete', function(req, res) {
  const id = req.params.id;
  Movie.findByIdAndDelete(id)
  .then( () => {
    res.redirect("/movies");
  })
  .catch (error => {
    console.log(error);
  })
});

// Get Movie-Info page
router.get('/:id', function(req, res) {
  const id = req.params.id;
  Movie.findById(id)
  .then(movie => {
    res.render("movie-info", {"tabtitle": movie.title, "movie": movie})
  })
  .catch( error => {
    console.error(`Error reading movie with ${id}!`, error)
  })
});

// Exports
module.exports = router;