const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) =>{
    console.log("hola soy la ruta")
     res.render('index')
    });

router.get("/movies", (req,res, next)=> {
    Movie.find({})
    .then((todasLasPeliculas) =>{
        res.render("movies",{
            moviesAll:todasLasPeliculas
        })
    }).catch((error)=>{
        console.log("no funciona")
        next(error)
    })
 
})

router.get("/movies/:movieid", (req,res, next) => {
    const movieId = req.params.movieid
    console.log(movieId)
    Movie.findById(movieId)
    .then((peliculaSeleccionada) =>{
        res.render("movie-detail", 
            peliculaSeleccionada
        )
    }).catch((error) => {
        console.log("no funciona")
        next(error)
    })
    
})

module.exports = router;
