const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res) => {
    Movie
        .find()
        .select(['title', 'image', '_id'])
        .then(allMovies => res.render('movies', { allMovies }))
        .catch(err => console.log(err))
})

router.get('/movie/:_id', (req, res) => {

    const { _id } = req.params

    Movie
        .findById(_id)
        .then(movie => res.render('movieDetails', movie))
        .catch(err => console.log(err))
})



module.exports = router;
