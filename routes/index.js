const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'))

router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(movies => {
            console.log(movies)
            res.render("movies", { movies })
        })
        .catch(err => console.error("Ha habido un error en todas las peliculas", err))
})

router.get('/movie/:id', (req, res) => {
    const { id } = req.params

    Movie
        .findById(id)
        .then(movie => res.render("detalle", movie))
        .catch(err => console.error("Ha habido un error en todas las peliculas", err))
})

module.exports = router
