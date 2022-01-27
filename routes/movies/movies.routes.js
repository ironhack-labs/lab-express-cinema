// routes/book.routes.js

const router = require('express').Router();

const Movie = require('../../models/Movie.model.js'); // <== add this line before your routes

router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(allMovies => {
    console.log('Retrieved books from DB:', allMovies);
    res.render('movies/movies.hbs', {movies: allMovies});
    })
    .catch(error => {
    console.log('Error while getting the books from the DB: ', error);
    next(error);
    });
});

/*router.get('/book/create', (req, res, next) => res.render('books/book-create.hbs'));

router.post('/books/create', (req, res) => {
    const { title, author, description, rating } = req.body;
    Book.create({ title, author, description, rating })
    .then(bookFromDB => {
        console.log("created book->",bookFromDB);
        res.redirect('/books');})
    .catch(error => next(error));
});*/

router.get('/movie/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then(movie => {
        res.render('movies/movie.hbs', {movie});
    })
    .catch(error => {
        console.log('Error while getting the books from the DB: ', error);
        next(error);
    });
});

module.exports = router;