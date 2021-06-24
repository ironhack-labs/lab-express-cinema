const express = require('express')
const router = express.Router()

router.get('/', (req, res, ) => res.render('index'))

router.get('/movies', (req, res, next) => {
    Movie.find()
       
        .then(allTheMoviesFromDB => {
            console.log('Retrieved movies from DB:', allTheMoviesFromDB)
            console.log(allTheMoviesFromDB)
            res.render('movies', {movies : allTheMoviesFromDB})
        })
        .catch(error => console.log('Error while getting the movies from the DB: ', error))
    
});
const Movie = require('../models/Movie.model');
module.exports = router
