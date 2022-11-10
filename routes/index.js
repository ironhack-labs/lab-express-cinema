const express = require('express')
const router = express.Router()

const Movie = require('./../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'))

router.get("/movies", (req, res) => {

    Movie
        .find()
        .then(allMovies => {
            console.log('Se ha creado este registro:', allMovies)
            res.render('movies', { allMovies })
        })
        .catch(err => console.log(err))

})

router.get('/movies/:id', (req, res) => {
    // console.log(req.params)
    const { id } = req.params
    // console.log(movieId)

    Movie
        .findById(id)
        .then(moviesId => {
            // console.log(moviesId)
            res.render('movies-details', moviesId)
            console.log(moviesId)
        })
        .catch(err => console.log(err))
})

module.exports = router
