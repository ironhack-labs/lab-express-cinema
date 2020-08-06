const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')
//movies route
router.get('/', (req, res, next) => {
    Movie.find()
      .then(allTheMoviesFromDB => {
        console.log('Retrieved Movies from DB:', allTheMoviesFromDB);
        res.render('movies', { movies: allTheMoviesFromDB });
      })
      .catch(error => {
          console.log('Error while getting the movies from the DB: ', error);
      })
});

router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then((movieFromDB)=> {
            res.render('movie-details', {movie: movieFromDB})
        })
})

module.exports = router;