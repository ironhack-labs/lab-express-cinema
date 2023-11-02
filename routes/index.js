const express = require('express')
const Movie = require('../models/Movie.model')
const router = express.Router()

/* GET home page */
router.get('/', (req, res, next) => res.render('index'))

router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(data => {
            const movies = []
            data.forEach(e => {
                movies.push({ id: e.id, title: e.title, image: e.image })
            })
            res.render('movies', { movies })
        })
        .catch(err => console.log('Error en la transacción', err))
})


router.get('/movie-detail/:movieId', (req, res) => {
    const { movieId } = req.params
    Movie
        .findById(movieId)
        .then(data => {
            res.render('movie-detail', data)
        })
        .catch()
})

module.exports = router
