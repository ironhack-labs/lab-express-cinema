const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js'); 

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET MOVIES */
router.get('/movies', (req, res, next) => {
    Movie.find()
      .then(allTheMoviesFromDB => {
        // console.log('Retrieved books from DB:', allTheBooksFromDB);
   
        // res.render('books-list.hbs', {books: allTheBooksFromDB}) // extension .hbs is not mandatory so we can omit it
        res.render('movies', { movies: allTheMoviesFromDB }); // pass `allTheBooksFromDB` to the view (as `books`)
      })
      .catch(error => {
        console.log('Error while getting the movies from the DB: ', error);
   
        // Call the error-middleware to display the error page to the user
        next(error);
      });
  });

router.get('/movies/:movieId', (req, res) => {
  const { movieId } = req.params;
 
  Movie.findById(movieId)
    .then(theMovie => res.render('movie-details', { movie: theMovie }))
    .catch(error => {
      console.log('Error while retrieving movie details: ', error);
 
      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

module.exports = router;


