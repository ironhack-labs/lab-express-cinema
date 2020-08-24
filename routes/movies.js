const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => {
    Movie.find()
    // -> allTheBooksFromDB is a placeholder, it can be any word
    // |
    .then(allTheMoviesFromDB => {res.render('movies.hbs', { movies: allTheMoviesFromDB})})
    .catch(error => console.log('Error while getting the books from the DB: ', error));
});

router.get('/:movieId', (req, res, next) => {
    const { movieId } = req.params;
    Movie.findById(movieId)
        .then(movieFromDB => {
            console.log(movieFromDB);
            res.render('../views/movies-details.hbs', {movie: movieFromDB})
        }).catch(err => console.log(`Error finding movie by Id: ${err}`))
})

module.exports = router;
