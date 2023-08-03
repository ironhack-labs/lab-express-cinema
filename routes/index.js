const express = require('express');
const router = express.Router();

const Movie = require('./../models/movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//  GET movies page
router.get('/movies', (req, res, next) => {

    Movie
        .find()
        .then(movies => {
            // res.send("testiiinggg")
            res.render('movies', { movies })
        })
        .catch(err => console.log(err))
})

// GET movie details page using Params

router.get('/movie/:id', (req, res) => {

    const movie_id = req.params.id

    Movie
        .findById(movie_id)
        .then(movie => {
            res.render('movie', movie)
        })
        .catch(err => console.log(err))

})


module.exports = router;
