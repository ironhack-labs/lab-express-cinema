const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movie
       .find()
       .then(theMovies => {
           console.log('Retrieved movies from DB:', theMovies);

           res.render('movies.hbs', { movie: theMovies }); 
         })
         .catch(error => {
           console.log('Error while getting the movies from the DB: ', error);

           next(error);
         });
     });

module.exports = router;
