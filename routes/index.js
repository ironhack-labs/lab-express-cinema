const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    
    Movie
    .find()
    .then(movies => res.render('movies', { movies }))
    .catch(err => console.log(err))

})

router.get('/movies/details/:movies_id', (req, res) => {

    const {movies_id} = req.params
    console.log('Yo no me arriesgo', movies_id)

    Movie
    .findById(movies_id)
    .then(movies => res.render('details', movies))
    .catch(err => console.log(err))
})

module.exports = router;
