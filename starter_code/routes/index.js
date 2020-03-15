const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie.js')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/*Get the movies*/
router.get('/movies', (req, res, next) => {
	Movie.find()
		.then((allMoviesFromDB) => {
			console.log('Retrieved movies from DB:', allMoviesFromDB);
			res.render('movies', { movies: allMoviesFromDB });
		})
		.catch((error) => {
			console.log('Error while getting the movies from the DB: ', error);
		})
});

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movieId => {
      res.render('movie-details', { movieId });
    })
    .catch(e => next(e));
});




module.exports = router;
