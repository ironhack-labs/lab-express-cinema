// routes/movie.routes.js

const router = require('express').Router();

const Movie = require('../models/Movie.model.js'); // <== add this line before your routes

// GET route to retrieve and display all the books
router.get('/movies', (req, res, next) => {
  Movie
    .find()
    .then(moviesFromDB => {
      // -> moviesFromDB is a placeholder, it can be any word
      console.log('Retrieved movies from DB:', moviesFromDB);

      res.render('movies/movies.hbs', { movies : moviesFromDB });
    })
    .catch(error => {
      console.log('Error while getting the books from the DB: ', error);

      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

module.exports = router;
