const express = require('express');
const router = express.Router();

const Movie = require ("../models/Movie.model.js")


// GET route to retrieve and display all the movies
router.get('/movies', (req, res, next) => {
	//console.log ("movies.routes.js")
	Movie.find()
	  .then(allTheMoviesFromDB => {
		console.log('Retrieved movies from DB:', allTheMoviesFromDB);
		res.render('movies', { movies: allTheMoviesFromDB }); 
	  })
	  .catch(error => {
		console.log('Error while getting the books from the DB: ', error);
  
		// Call the error-middleware to display the error page to the user
		next(error);
	  });
  });

  router.get('/movie/:id', (req, res, next) => {
	const movieToShow = req.params.id;
	Movie.findById(movieToShow)
	  .then(movie => {
		console.log('Retrieved movie from DB:', movie);
		//Preguntar porque aqui no tengo que pasar un objeto
		res.render('movie', movie); 
	})
	.catch(error => {
	  console.log('Error while getting the books from the DB: ', error);

	  // Call the error-middleware to display the error page to the user
	  next(error);
	});
  });
  
  module.exports = router;