const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();



/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;

router.get('/movies', (req, res) => {
    Movie.find().then(
        movies => {
            console.log("Movies are: " + movies.titles)
            res.render('movies', { movies: movies })
        }
    ).catch(error => {
        console.log('Error while getting the books from the DB: ', error);
      })
});

router.get('/movie/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(movieList => {
      res.render('movie-details', { movies: movieList });
    })
    .catch(error => {
      console.log('Error while retrieving book details: ', error);
    })
});