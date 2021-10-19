const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');


router.get('/movies', (req, res, next) => {
    Movie.find()
    .then( data => {
    res.render('movies', {data})
    })
    .catch (err => {console.log(`An error occured getting the movies from DB: ${err}`)})
});

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then( data => {
        console.log(data)
        res.render('movie-details', data)
    })
    .catch(err => {console.log(`An error has occured loading the details of the movie: ${err}`)})
});

router.get('/new-movie', (req, res, next) => {
    res.render('new-movie')
})

router.post('/new-movie', (req, res, next) => {
    const {title, director, stars, image, description, showtimes} = req.body;
    Movie.create({ title, director, stars, image, description, showtimes })
        .then( () => {
            res.redirect('/movies')
        })
})

module.exports = router;
