const express = require('express')
const router = express.Router()

const Movie = require('../model/movie')

router.get('/', (req, res, next) => {
    Movie.find()
        .then(allMovies=>{res.render('movies-index',{allM: allMovies})})
        .catch(error => console.log(error))
    })

// router.get('/info', (req, res, next) => {
//     Movie.find()
//     .then (movieInfo => res.render('movies-info', {movieInfo}))
//     .catch(error => console.log(error))
// })
router.get('/view/:movie_id', (req, res) => {
    //const id = req.params.book_id
    console.log("algo")
    Movie.findById(req.params.movie_id)
        .then(theMovie => res.render('movie-detail', { movie: theMovie }))
        .catch(error => console.log(error))
})
module.exports = router