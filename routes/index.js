const express = require('express');
const router = express.Router();
const Movie= require('../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index')
})

//Ruta de movies>> enseña lista de peliculas
router.get('/movies', (req, res, next) => {
    Movie.find({})
    .then((movies) => {
     console.log(movies)
        res.render('movies', movies)// 'movies' es nombre del hbs, {movies: data} con esto hago el foreach           
        })
        .catch(error => console.log(error));
})


//Ruta de detalles >>enseña los detalles de la peli selccionada
router.get('/movie/:movieId', (req, res, next)=>{
    const id= req.params.movieId
    Movie.findById(id)
    .then((movieDetails)=>{
        console.log(movieDetails)
        res.render('movie-details', movieDetails)
    })
    .catch(error => console.log(error));
})

module.exports = router;
