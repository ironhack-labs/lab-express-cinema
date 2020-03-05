const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie');

// GET /movies
router.get('/', (req, res, next) => {
  Movie.find({})
  .then(movies => {
    res.render('movies', { movies });
  })
  .catch(err => console.log('Error while rendering movies: ', err));
  console.log('printing movies');
});

//GET /movies/:id
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
  .then(foundMovie => {
    res.render('eachmovie', { foundMovie });
  })
  .catch(err => console.log('Error while rendering movie data: ', err));
  console.log('printing each movie data');
});

//GET /movies/:id/edit
router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
  .then(foundMovie => {
    res.render('edit', { foundMovie });
  })
  .catch(err => console.log('Error while rendering movie data: ', err));
  console.log('edit each movie');
});

//POST /movies/:id/edit
router.post('/:id/edit', (req, res, next) => {
	const { id } = req.params;
	const { title, director, image, description, stars, showtimes } = req.body;
	Movie.findByIdAndUpdate(id, {
    title, 
    director, 
    image, 
    description, 
    stars, 
    showtimes,
	})
		.then(moviesUpdated => {
			res.redirect(`/movies/${id}`);
		})
		.catch(next);
});

// POST movies/:id/delete
router.post('/:id/delete', (req, res, next) => {
	const { id } = req.params;
	Movie.findByIdAndDelete(id)
		.then(() => {
			res.redirect('/movies');
		})
		.catch(next);
});

module.exports = router;