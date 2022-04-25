const Movie = require("../models/Movie.model");
const router = require("express").Router();

router.get("/movies", (req,res,next)=>{
    Movie.find()
        .then(moviesArr=>{
            res.render("movies/movies-list", {movies: moviesArr})
        })
        .catch(err=>{
            console.log(`Error get movieList from DB`,err);
            next(err);
        })
})

router.get("/movies/:movieId", (req,res,next)=>{

    Movie.findById(req.params.movieId)
        .then(movieDetails=>{
            console.log("Our promise is");
            console.log(movieDetails);
            res.render("movies/movie-details", {movie: movieDetails})
        })
        .catch(err=>{
            console.log(`Error get movie details from DB`,err);
            next(err);
        })
})







module.exports = router;