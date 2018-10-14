const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const movieSchema = require('../models/Movie');


mongoose.connect('mongodb://localhost/moviesApp')
  .then(() => {
    console.log('Connected to Mongo!');
    
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

const Movie = mongoose.model('Movie', movieSchema);

router.get ('/', (req, res) => {
  Movie.find()       
   .then((movies) => {
     res.render('movies', {movies});
     console.log(movies);
    
   })
   .catch(error => {
     console.log('Error:', error)
   })
})

router.get ('/:id', (req, res) => {
  const id = req.params.id;
  Movie.findById(id)
  .then ((movie) => {
    res.render('movie-info', {'tabtitle': movie.title, 'movie': movie})
  })
  .catch(() => {
    console.error(`Error reading movie ${id}!`, error)
  })
})

module.exports = router;