const express = require('express')
const router = express.Router()

const Movie = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res, next) => {

    Movie.find()
        .then(allMovies => res.render('movies', { allMovies }))
        .catch(err => console.log("Error en la BBDD", err))
})

router.get('/movie/:id', (req, res, next) => {
    const id = req.params.id
    Movie.findOne({ id: "id" })
        
        .then(theMovie => res.render('movie', theMovie))
        .catch(err => console.log("Error en la movie DETALLES", err))
})



module.exports = router;
