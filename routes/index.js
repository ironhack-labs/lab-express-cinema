const express = require('express');
const router = express.Router(); 
const Movie = require('../models/movie.model.js');  

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
 
router.get('/movies', (req, res, next) => {
    Movie.find()
            // -> allTheBooksFromDB is a placeholder, it can be any word
           // |
      .then(allTheMoviesFromDB => {
        console.log('Retrieved movies from DB:', allTheMoviesFromDB);
        res.render('movies', {movies : allTheMoviesFromDB});
      })
      .catch(error => {
        console.log('Error while getting the movies from the DB: ', error);
      })
  });

 

  router.get('/movies/:id', (req, res, next) => {
    Movie.findOne({'_id': req.params.id})
      .then(theMovie => {
        res.render('movie-details', { movie: theMovie });
      })
      .catch(error => {
        console.log('Error while retrieving movie details: ', error);
      })
  });

module.exports = router;

