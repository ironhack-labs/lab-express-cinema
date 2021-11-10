// Require express and Router to user routes
const express = require('express');
const router = express.Router();


// require the Model --> Movie.model.js
const Movie = require("../models/Movie.model.js"); // <== add this line before your routesMovie.mo


// GET route to retrieve and display all the books
// '/movies' --> the view to render 
router.get('/movies', async (req, res, next) => {
  try {
    // Use the model --> Movie model to find /query to db
    // find() --> with no arguments will find anything in the db
    const moviesFromDB = await Movie.find();
    console.log('Retrieved movies from DB:', moviesFromDB);
    // we call the render method after we obtain the books data from the database -> allTheBooksFromDB
    res.render('movies/movies-list.hbs', { 
      movies: moviesFromDB 
    }); // pass `allTheMoviesFromDB` to the view (as a variable movies to be used in the HBS)
  } catch(error) {
    console.log('Error while getting the movies from the DB: ', error);
 
    // Call the error-middleware to display the error page to the user
    next(error);
  }

});

// CRUD -> Read
// GET route to show details
router.get('/movie/:id', async (req, res, next) => { 
  try {
      //const id = req.params.id; // :id --> will be the param
    const {id} = req.params;
    const movieDetail = await Movie.findById(id);
    // res.send(movieDetail);
    res.render('movies/movie-detail.hbs', { movie: movieDetail });
  } 
  catch(error) {
    console.log('Error while getting the movies from the DB: ', error);
    // Call the error-middleware to display the error page to the user
    next(error);
  }
}) 
 
module.exports = router;
