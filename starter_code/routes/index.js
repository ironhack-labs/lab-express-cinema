const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');
const Movie = require('../models/Movie');

router.get('/', (req, res, next) => {
  res.render('index', { layout: 'layout-no-nav.hbs' });
});

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then((movies) => {
    console.log(movies);
    res.render('movies', {
      movies
    });
  })
  .catch((error) => {
    console.log('An error happened while finding movies: ', error);
    next(error);
  })
});

router.get('/add', (req, res) => {
	res.render('add');
});

router.get('/movie/:id', (req, res, next) => {
  const { id } = req.params;
  console.log('id');
  Movie.findById(id)
  .then((movie) => {
    console.log(movie);
    res.render('movie', {
      movie
    });
  })
  .catch((error) => {
    console.log('An error happened while finding a movie: ', error);
    next(error);
  })
});

router.post('/movie/:id/delete', (req, res, next) => {
	const { id } = req.params;
	Movie.deleteOne( {_id: id})
		.then(success => {
			console.log(`Deleted movie`);
			res.redirect('/movies');
		})
		.catch(error => {
			console.log('Error while deleting a movie: ', error);
			next(error);
		});
});

module.exports = router;
