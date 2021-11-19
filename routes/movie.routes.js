// Require express and Router to user routes
const express = require('express');
const router = express.Router();

// To do CRUD operations we need the Model
// require the Model --> Movie.model.js
const Movie = require("../models/Movie.model.js"); // <== add this line before your routesMovie.mo

// CRUD - Read - find()
// GET route to retrieve and display all the books
// '/movies' --> the view to render 
router.get('/movies', async (req, res, next) => {
  try {
    // Use the model --> Movie model to find /query to db
    // find() --> with no arguments will find anything in the db
    console.log('in movies route')
    console.log(Movie)
    const moviesFromDB = await Movie.find();
    console.log('Retrieved movies from DB:', moviesFromDB);
    // we call the render method after we obtain the books data from the database -> allTheBooksFromDB
    // return an Array, so then I can iterate through #each
    res.render('movies/movies-list', { 
      movies: moviesFromDB 
    }); // pass `allTheMoviesFromDB` to the view (as a variable movies to be used in the HBS)
  } catch(error) {
    console.log('Error while getting the movies from the DB: ', error);
 
    // Call the error-middleware to display the error page to the user
    next(error);
  }

});

// CRUD -> Read - findById
// GET route to show details
// {{  views/movies/movies-list.hbs }}
// <a href="/movie/{{_id}}">See more</a>
router.get('/movie/:id', async (req, res, next) => { 
  try {
      //const id = req.params.id; // :id --> will be the param
    const { id } = req.params;
    const movie = await Movie.findById(id); // return an object
    //res.send(movie); // it's an object
    // movie --> is the object, so let's pass the object directly wihouth { }
    res.render('movies/movie-detail',  movie);
  } 
  catch(error) {
    console.log('Error while getting the movies from the DB: ', error);
    // Call the error-middleware to display the error page to the user
    next(error);
  }
}) 
 
module.exports = router;
