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

router.get('/movies/:movieId',(req,res,next)=>{
    const {movieId} = req.params;
    Movie.findById(movieId)
    .then((theMovieFromDB)=>{
        console.log(theMovieFromDB)
        res.render('movie-details', {movieDetails:theMovieFromDB})
    })
    .catch(error=>{
        console.log('Error while retrieving ONE Movie details: ',error)
    })
})

module.exports = router;

