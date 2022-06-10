const router = require('express').Router();
const Movie = require('../models/Movie.model.js');

// GET route to retrieve and display all the movies
router.get('/movie', (req, res, next) => {
    Movie.find()
    .then(allTheMoviesFromDB => {
      // -> allTheMoviesFromDB is a placeholder, it can be any word
      console.log('Retrieved movies from DB:', allTheMoviesFromDB);
    res.render('views/movie.hbs', {views: allTheMoviesFromDB})
})
.catch(error => {
    console.log('Error while getting the movies from the DB: ', error);

    // Call the error-middleware to display the error page to the user
    next(error);
  });
});

router.get('/movie/:movieId', (req, res) => {
    const { movieId } = req.params;
    Movie.findById(movieId) 
    .then(theMovie => res.render('views/movie-details.hbs',{movie: theMovie }))
    .catch(error => {
        console.log('Error while retrieving movie details: ', error);
        next(error);
      });
  });
 
module.exports = router;
