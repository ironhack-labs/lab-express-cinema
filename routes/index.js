const express = require('express');
const router = express.Router();
const Movie = require('./../models/movie.model')


/* GET home page */
router.get('/', (req, res, next) =>
    res.render('index'));


router.get('/movies-gallery', (req, res) => {

    Movie
        .find()
        .then(movies =>
            res.render('movies', { movies }))
        .catch(e => console.log(e))
})

router.get('/movies-gallery/:movie_id', (req, res) => {

    const { movie_id } = req.params
    console.log(req.params)

    Movie

        .findById(movie_id)
        .then(movie =>
            res.render('movies/details', { movie }))
        .catch(err => console.log(err))

})



module.exports = router;
