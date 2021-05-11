const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie.model.js');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie.find()
        .then(moviesFromDb => {
            console.log('movies:', moviesFromDb)
            res.render('movies',{ movies: moviesFromDb})
        }).catch(e => {
            console.log('Error while getting the books from DB',e)
            next(e)
        })
})

router.get('/movies/:movieId', (req, res) => {
    const { movieId } = req.params
    // console.log('movie id', movieId)
    // res.render('movie-details')

    Movie.findOne({_id: movieId})
    .then(theMovie => res.render('movie-details', { movie: theMovie }))
    .catch(error => {
      console.log('Error while retrieving movie details: ', error);
 
      // Call the error-middleware to display the error page to the user
      next(error);
    });
    
})

module.exports = router;

