const express = require('express');
const { route } = require('../app');
const router = express.Router();
const Movie = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res) => res.render('index'));


router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(moviesFromDB => {

            res.render('movies', { movies: moviesFromDB })
        })
        .catch(err => console.log(err))

}
);

router.get('/movies/:moviesId', (req, res) => {

    const { moviesId } = req.params
    Movie
        .findById(moviesId)
        .then(moviesFromDB => {
            console.log(moviesFromDB)
            res.render('detalles', { movies: moviesFromDB })
        })
        .catch(err => console.log(err))

})


module.exports = router;
