const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies', { movies });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
});

//important to put this before the one with movieId
router.get('/movies/create', (req, res, next) => {
	res.render('create');
});

router.get('/movies/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(movie => {
      res.render('movie', { movie });
    })
    .catch(error => {
      console.log('Error while retrieving movie details: ', error);
    })
});



// router.post('/movies', (req, res, next) => {
// 	const { title, director, description } = req.body;
// 	Resort.create({
// 		title,
// 		director,
// 		description,
// 	})
// 		.then(() => {
// 			res.redirect('/movies');
// 		})
// 		.catch(next);
// });

module.exports = router;
