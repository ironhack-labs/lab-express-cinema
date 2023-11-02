const express = require('express');
const router = express.Router();
const Movie = require('./../models/movie.model')
/* GET home page */
router.get('/', (req, res) => res.render('index'))

router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(Movies => res.render('movies', { Movies }))
        .catch(err => console.log(err))
})

router.get('/movie/:movie_id', (req, res) => {
    const { movie_id } = req.params
    Movie
        .findById(movie_id)
        .then(movie => res.render('detailsbyid', movie))
        .catch(err => console.log(err))
})



module.exports = router;


