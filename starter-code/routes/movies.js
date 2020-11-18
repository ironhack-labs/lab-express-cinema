const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/', (req, res, next) => {
    Movie.find().then(movies => {
        res.render('movies/index.hbs', { movies });
    })
        .catch(err => {
            next(err);
        });
});

router.get('/new', (req, res, next) => {
    console.log('hello');
    res.render('movies/new.hbs');
});

router.post('/new', (req, res, next) => {
    const { title, genre, plot, cast } = req.body;
    console.log(req.body.title);
    Movie.create({ title, genre, plot, cast })
        .then(() => {
            res.redirect('/movies');
        })
        .catch(err => {
            next(err);
        })
});


module.exports = router;