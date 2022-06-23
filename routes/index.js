const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js')
    /* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {

    //console.log(Movie)
    Movie
        .find()
        .select({ title: 1, image: 1 })
        .then(data => {
            res.render('movies', { data })
        })
        .catch(err => console.log(err))
})


router.get('/movieDetails/:movieId', (req, res) => {
    const { movieId } = req.params
    console.log(movieId)
    Movie
        .findById(movieId)
        .then(dataId => {
            console.log(dataId)
            res.render('movieDetails', { dataId })
        })
        .catch(err => console.log(err))
})

module.exports = router;