const express = require('express');
const router = express.Router();
const Movie = require('./../models/Movie.model')

router.get('/', (req, res, next) => res.render('index'));



router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(eachmovies => res.render('movies', { eachmovies }))
        .catch(error => console.log(error));

});

router.get('/movieID/:id', (req, res) => {

    const { id } = req.params

    Movie
        .findById(id)
        .then(movie => {
            console.log(movie)
            res.render('movieID', movie)
        })
        .catch(err => console.log(err))

})
module.exports = router;
