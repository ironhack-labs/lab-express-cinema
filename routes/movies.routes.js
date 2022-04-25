const Movie = require("../models/Movie.model");
const router = require("express").Router();

//Get details for one movies for update
router.get("/movies/:movieId/edit", (req,res,next)=>{
    Movie.findById(req.params.movieId)
        .then(movieDetails =>{
            res.render("movies/movie-edit", {movie: movieDetails})
        })
        .catch(err=>{
            console.log("Error getting movie details from DB", err)
            next(err)
        })
})

//Updating data from the form
router.post("/movies/:movieId/edit", (req, res, next)=>{
    const { title, director, stars, image, description, showtimes} = req.body;
    Movie.findByIdAndUpdate(req.params.movieId, { title, director, stars, image, description, showtimes }, { new: true })
        .then(updateMovie=>{
            console.log(updateMovie.id)
            res.render("movies/movie-details", {movie:updateMovie})
        }) // go to the details page to see the updates
        .catch(err=>{
            console.log("Error updating movie details in the DB")
            next(err)
        })
})


//GET list of movies
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


//Get details for one movies using id
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