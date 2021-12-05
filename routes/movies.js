const router = require('express').Router()

const Movie = require("../models/Movie.model")

router.get('/movies',(req,res,next)=>{
    // res.render("movies")
    Movie.find()
    .then((allMoviesFromDB)=>{
        console.log('All movies from DB', allMoviesFromDB)
        res.render('movies', {movies:allMoviesFromDB})
    })
    .catch((err)=>{
        console.log("Error en GET ALL Movies",err)
    })
})

module.exports = router;

