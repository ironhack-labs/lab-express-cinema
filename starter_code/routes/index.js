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
  Movie.findById(id)
  .then((movie) => {
    res.render('movie', {
      movie
    });
  })
  .catch((error) => {
    console.log('An error happened while finding a movie: ', error);
    next(error);
  })
});

router.get('/movie/:id/edit', (req, res, next) => {
	const { id } = req.params;
	Movie.findById(id)
		.then(movie => {
      console.log(`updating ${movie}`);
			res.render('update', {
        movie
      });
		})
		.catch(error => {
			console.log('Error while finding a movie to update: ', error);
			next(error);
		});
});

router.post('/movies', (req, res, next) => {
  const { title, director, image, description } = req.body;
  let { stars, showtimes } = req.body;
  stars = stars.split(',');
  showtimes = showtimes.split(',');
  const movie = { title, director, stars, image, description, showtimes };
  Movie.create(movie)
    .then((movie) => {
      console.log(`Added movie: ${movie}`);
      res.redirect('/movies');
    })
    .catch((error) => {
      console.log('Error saving movie', error);
      res.render('movie/new');
      next(error);
    })
});

router.post('/movies/:id', (req, res, next) => {
	const { id } = req.params;
  const { title, director, image, description } = req.body;
  let { stars, showtimes } = req.body;
  stars = stars.split(',');
  showtimes = showtimes.split(',');
	Movie.findByIdAndUpdate(id, {
    title,
    director,
    stars,
    image,
    description,
    showtimes
	})
    .then(() => {
      res.redirect('/movies');
    })
    .catch((error) => {
      console.log('Error updating movie', error);
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
