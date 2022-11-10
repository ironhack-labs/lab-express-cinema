const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'))

router.get('/movie', (req, res) => {
    //res.send('Holi')
    Movie
        .find()
        .then(moviesFromDb => {
            res.render('movie-list', { movie: moviesFromDb })
        })
        .catch(err => console.log(err))

})

router.get('/movie/:id', (req, res) => {
    const { id } = req.params
    Movie
        .findById(id)
        .then(moviesFromDb => {
            res.render('movie-details', moviesFromDb)
        })
})

module.exports = router;
