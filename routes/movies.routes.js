
const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')



router.get('/', (req, res) => {
    Movie
        .find()
        .then(allMovies => {
            
            res.render('movies', { allMovies: allMovies })
        })  
        .catch(err => console.log(err))

})

router.get('/details/:movie_id', (req, res) => {

    const movieId = req.params.movie_id
    
    Movie 
        .findById(movieId)
        .then(theMovie => res.render('details', { theMovie }))
})


module.exports = router