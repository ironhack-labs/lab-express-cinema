const express = require('express');
const router = express.Router();

const Movies = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/peliculas', (req, res) => {

    Movies
        .find()
        .then(moviesFromDB => {
            res.render('list', { movies: moviesFromDB })

        })
        .catch(err => console.log(err))
})

router.get('/peliculas/:id', (req, res) => {

    const { movies_id } = req.params

    Movies
        .findById(movies_id)
        .then(moviesFromDB => {
            res.render('movie-details', moviesFromDB)
        })
        .catch(err => console.log(err))

})



module.exports = router;
