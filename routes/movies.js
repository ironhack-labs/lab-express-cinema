const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')


router.get('/', (req, res, next) => {
    Movie
    .find()
    .then(movieFromDB => {
        console.log('movies in the database:', {movieFromDB})
        res.render('movies', { movieFromDB })
    })
    .catch(error => console.log('Something went wrong when retrieving movies from the database: ', error))
});

router.get('/details/:id', (req, res, next) => {
    const { id } = req.params
  
    Movie.findById(id)
      .then(movieFromDB => {
        res.render('movie-details', movieFromDB)
      })
  
  })

module.exports = router;
