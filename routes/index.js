const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;

const Movie = require('../models/Movie.model'); 
router.get('/movies', (req, res, next) => {
    Movie.find()
      .then(allTheMoviesFromDB => {
        console.log("these are:", allTheMoviesFromDB)
        res.render('movies', { movies: allTheMoviesFromDB }); // pass `allTheBooksFromDB` to the view (as `books`)
      })
      .catch(error => console.log('Error while getting the movies from the DB: ', error));
  });
  
  
  // // show details of each movie
  router.get('/movies/:id', (req, response, next) => {
    Movie.findById(req.params.id).then((movieFromDB) => {
      console.log("movie details: ", movieFromDB)
      response.render('movie-details', movieFromDB)
  })
  })