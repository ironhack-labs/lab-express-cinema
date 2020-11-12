const express = require('express')
const router = express.Router()

const Movies = require('../models/Movie.model');
router.get('/', (req, res) => {
    // res.send('Funciona')

    Movies
        .find()
        .then(allMovies => {
            res.render('movies/movies', { allMovies })
        })
        .catch(err => console.log(err))

})

router.get('/detail/:movies_id', (req, res) => {

    const movieId = req.params.movies_id

    Movies
        .findById(movieId)
        .then(theMovie => {
            console.log(theMovie)
            res.render('movies/details', theMovie)
        }
        )
        .catch(err => console.log(err))
})


module.exports = router
