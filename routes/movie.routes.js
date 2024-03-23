// here will hold all the CRUD routes related to the Book model.


const router = require('express').Router();

const Movie = require('../models/Movie.model.js'); // <== add this line before your routes

// GET route to retrieve and display all the movies
router.get('/movies', (req, res, next) => {
    Movie.find()
      .then(allTheMoviesFromDB => {
        // -> allTheMoviesFromDB is a placeholder, it can be any word
        console.log('Retrieved movies from DB:', allTheMoviesFromDB);
  
        res.render('movies.hbs', { movies: allTheMoviesFromDB }); // pass `allTheBooksFromDB` to the view (as a variable books to be used in the HBS)
      })
      .catch(error => {
        console.log('Error while getting the movies from the DB: ', error);
  
        // Call the error-middleware to display the error page to the user
        next(error);
      });
  });


// GET route to retrieve and display details of a specific book
// There are different ways to get the id info - we can use req.params or req.query. The way that is the most straight-forward is using req.params so let’s do it:
router.get('/movies/:movieId', (req, res) => {
    const { movieId } = req.params;
  
    Movie.findById(movieId)
      .then(theMovie => res.render('movie-details.hbs', theMovie ))
      .catch(error => {
        console.log('Error while retrieving movie details: ', error);
   
        // Call the error-middleware to display the error page to the user
        next(error);
      });
  });  

module.exports = router;  