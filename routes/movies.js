const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(moviesFromDB => {
        console.log("==============================================>", moviesFromDB );
        res.render('movies.hbs', { moviesFromDB })
    })
      .catch(err => console.log(`Error occurred while retrieving movies: ${err}. `))
  });

router.get('/movies/:id', (req, res, next) => {
     Movie.findById(req.params.id)
    .then(movieDetails => 
        res.render("movie-details.hbs", { movieDetails }))
        .catch(err => console.log(`Error occured while navigating to details page: ${err}.`))
        });

module.exports = router; 