const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie.find()
        .then(allMovies => {
            console.log(allMovies)
            res.render('movies', {
                allMovies
            })
        })
        .catch(err => console.log("Error en la BBDD", err))
})

router.get('/details/:id', (req, res) => {

    Movie.findById(req.params.id)
        .then(theMovie => res.render('details', {theMovie}))
        .catch(err => console.log("Error en la BBDD", err))
})



module.exports = router;
