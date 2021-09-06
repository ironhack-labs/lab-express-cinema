const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
     Movies
        .find()
        .then(allTheMoviesFromDB => {
            console.log('Retrieved movies from DB:', allTheMoviesFromDB);
       
            res.render('movies.hbs', { movies: allTheMoviesFromDB }); 
          })
          .catch(error => {
            console.log('Error while getting the movies from the DB: ', error);
       
            next(error);
          });
      });

router.get('/movie/:id', (req, res) => {
  const movieId  = req.params.id;

    Movies
      .findById(movieId)
      .then(theMovie => {
          res.render('movie-details', { movie: theMovie })
          console.log ("movie-details", theMovie)})

      .catch(error => {
          console.log('Error while retrieving movie details: ', error)});

  
  
      });


module.exports = router;


