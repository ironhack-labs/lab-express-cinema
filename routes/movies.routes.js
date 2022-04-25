const Movie = require("../models/Movie.model");
const router = require("express").Router();

// GET route to display the form
router.get('/movies/create', (req, res) => res.render('movies/movie-create.hbs'));


// POST route to save a new movie into the DB
router.post('/movies/create', (req, res, next) => {
    const newMovie = {
        title :req.body.title,
        director: req.body.director,
        stars: req.body.stars,
        image: req.body.image,
        description: req.body.description,
        showtimes: req.body.showtimes
    }

    Movie.create(newMovie)
        .then(newMovie=>{
            console.log("new movie created into the DB as:", newMovie.title)
            res.redirect("/Movies")
        })
        .catch(err=>{
            ("Something went wrong creating the newMovie into the DB",err)
            next(err);
        })
  });

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