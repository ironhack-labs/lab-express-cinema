const express = require('express');
const router = express.Router();

const Movie = require('../models/movie');

/* GET users listing. */
router.get('/', (req, res, next) => {
    Movie.find()
        .then(movies => {
            res.render('movies/main', {movies});
        })
        .catch(error => {
            next(error);
        });
});

router.get('/add', (req, res, next) => {
    res.render('movies/add');
});

router.post('/add', (req, res, next) => {
    const {title, director, stars, image, description, showtimes} = req.body;
    Movie.create({title, director, stars, image, description, showtimes})
        .then(() => {
            res.redirect('/movies');
        })
        .catch(error => {
            next(error);
        });
});

router.get('/:id', (req, res, next) => {
    const {id} = req.params;
    Movie.findById(id)
        .then(movie => {
            res.render('movies/info', movie);
        })
        .catch(error => {
            next(error);
        });
});

router.get('/:id/edit', (req, res, next) => {
    const {id} = req.params;
    Movie.findById(id)
        .then(movie => {
            res.render('movies/edit', movie);
        })
        .catch(error => {
            next(error);
        });
});

router.post('/:id/edit', (req, res, next) => {
    const {id} = req.params;
    const {title, director, stars, image, description, showtimes} = req.body;
    Movie.findByIdAndUpdate(id, {title, director, stars, image, description, showtimes})
        .then(() => {
            res.redirect(`/movies/${id}`);
        })
        .catch(error => {
            next(error);
        });
});

router.post('/:id/delete', (req, res, next) => {
    const {id} = req.params;
    Movie.findByIdAndRemove(id)
        .then(() => {
            res.redirect('/movies');
        })
        .catch(error => {
            next(error);
        });
});

module.exports = router;
