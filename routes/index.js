// 1. IMPORTACIÓN

const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')


// 2. RUTAS
/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index')
    
});

// DISPLAY MOVIES
router.get('/movies',(req,res,next)=>{
    Movie.find({})
    .then((listado)=>{
        console.log(listado)
        res.render('movies',listado)

    }).catch(error=>{
        console.log("No pudimos encontrar las películas")
        next(error)
    })
})

//DISPLAY DETAILS

router.get('/movies/:movieId',(req,res,next)=>{
    console.log(req.params.movieId)
    const id = req.params.movieId

    Movie.findById(id)
    .then((movieFound)=>{
        console.log(movieFound)
        res.render('movie-details',movieFound)
    })

})

// 3. EXPORTACIÓN
module.exports = router;
