const express = require('express')
const router = express.Router()

const Movie = require('./../models/Movie.model')

//Listado de Peliculas
router.get('/', (req, res) => {
    Movie
        .find()
        .then(allMovies =>{
            res.render('movies/movieList', { allMovies })
            console.log('hola')
        })
        .catch(err => console.log(err))
})




    

module.exports = router;