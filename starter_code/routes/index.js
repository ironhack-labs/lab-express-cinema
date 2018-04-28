const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(movies => {
            res.render('movies', { movies });
        }).catch(e => {
            console.log(e)
        })
});

router.get('/movies/:id', (req, res, next) => {
    let _id = req.params.id;
    Movie.findById(_id)
        .then(movie => {
            console.log(movie);
            res.render('movie-detail', movie);
        }).catch(e => {
            console.log(e)
        })
});


module.exports = router;