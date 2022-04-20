// routes/book.routes.js
 
const router = require('express').Router();

const Movie = require('../models/Movie.model.js'); // <== add this line before your routes

// router.get('/movies', (req,res) => res.render('books/book-create.hbs'));

router.get('/movies', (req, res, next) => {
    Movie.find()
      .then(dbResponse => {
        console.log('Retrieved movies from DB:', dbResponse);
        res.render('movies/movie-list.hbs', { movies : dbResponse });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
 
      next(error);
    });
});

router.get('/movies/:movieId', (req, res) => {
    const { movieId } = req.params;
    const id = req.params.id;

    Movie.findById(movieId)
        .then(theMovie => res.render('movies/movie-details.hbs', { movie : theMovie }))
        .catch(error => {
            console.log('Error while retrieving movie details: ', error);
            next(error);
        });
});


module.exports = router;
