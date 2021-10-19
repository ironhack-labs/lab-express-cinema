const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;

router.get("/movies", (req, res, next) =>{
    Movie.find()
    .then((allMoviesFromDB)=>{
        //console.log("Movies from DB:", allMoviesFromDB)
        
        const data = {
            moviesArr: allMoviesFromDB
        }
        
        res.render("movies/movies", data)
    })
    .catch((err)=> {
        console.log("ups, an error has been detected displaying a list of all movies", err)
        next (err);
    })
})

router.get("/movies/create", (req,res,next) => {
    res.render("movies/movies-create")
})

router.post("/movies/create", (req, res, next) => {
    console.log(req.body)
    const {title, director, description, stars} = req.body;
    Movie.create({title, director, description, stars})
    .then(() =>{
        res.redirect("/movies")
        
    })

    .catch((err)=>{
        console.log("ups, an error has been detected displaying a new movie", err)
        next (err);
    })
})

router.get("/movies/:movieId",  (req, res, next)=>{
    Movie.findById(req.params.movieId)
    .then((movieFromDB) => {
        // console.log(movieFromDB)
        res.render("movies/movies-details", movieFromDB)
    })
    .catch((err) => {
        console.log("ups, an error has been detected displaying the details of a singel movie", err)
        next (err);
    })
})

router.get("/movies/:movieId/edit", (req, res, next)=>{
    Movie.findById(req.params.movieId)
    .then((movieFromDBtoEdit) => {
        //console.log(movieFromDBtoEdit)
        res.render("movies/movies-edit" , movieFromDBtoEdit)
    })
    .catch((err) => {
        console.log("ups, an error has been detected getting the details of a singel movie", err)
        next (err);
    })
    
});


router.post("/movies/:movieId/edit", (req, res, next) => {

    const {title, director, description, stars} = req.body;

    
    
    Movie.findByIdAndUpdate(req.params.movieId, req.body, {new : true})
        .then( (movieFromDBtoEdit) => {
            res.redirect("/movies/" + movieFromDBtoEdit._id);  
        })

        .catch((err) => {
            console.log("ups, an error has been detected displaying the details of a singel movie", err);
            next (err);

        })


    
});