const express = require('express')
const router = express.Router()

const Movie = require('./../models/Movie.model')


router.get('/', (req, res) => {

    Movie
        .find()
        .then(allMoviesCreated => {
            console.log('todas las pelis', allMoviesCreated)
            res.render('movies-list', { allMoviesCreated })
            
           
        })
        
        .catch(err => console.log(err))
});


module.exports = router