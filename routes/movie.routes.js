const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model.js'); // without this line "Movie" in Movie.find is undefined

//Get movies page
 router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(allTheMoviesFromDB => {
            console.log('anything')
            console.log('allTheMoviesFromDB: ', allTheMoviesFromDB)
            console.log(allTheMoviesFromDB[0]);
            res.render('movies.hbs', { movies: allTheMoviesFromDB }); // Pass 'allTheMoviesFromDB to the view as a variable movies to be used in hbs
        })
        .catch(error => {
            console.log('Error while getting the movies from DB: ', error);
            //Call the error-middleware to display the error page to the user
            next(error);
        })
}) 

router.get('/:movieId', (req, res, next) => {

  //movieId => create
  const { movieId } = req.params;

  console.log('The ID from the URL is: ', movieId);

  Movie.findById(movieId).then(movie => {
    console.log('movie: ', movie)
      res.render('movie-details.hbs', movie);
  }).catch(error => {
      console.log('Error while retrieving book details: ', error);
      // Call the error-middleware to display the error page to the user
      next(error);
  });
})

module.exports = router;