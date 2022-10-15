const express = require('express');
const router = express.Router();
const Movies = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


//renderizar todas las películas
router.get("/movies", (req, res, next) => {
    Movies.find()
    .then((moviesList) => {
        res.render("movies.hbs", {
            moviesList
        })
    })
    .catch((err) => {
        next(err);
    })

})
// no he conseguido que me funcionara por el findById, y lo he hecho con el findOne

//renderizar los detalles
/*
router.get("/movies/:moviedetails", (req, res, next) => {
    const  movieId  = req.params;
    Movies.findById(movieId)
    .then((response) => {
        console.log(response);
        res.render("movies-details.hbs", {
            movieDetails: response
        })
    })
    .catch((err) => {
        next(err)
    })
})
*/
router.get("/movies/:moviedetails", (req, res, next) => {
    const { moviedetails } = req.params;
   // console.log(movieId)
    Movies.findOne({"_id": moviedetails})
    .then((response) => {  
        //console.log(response);
        res.render("movies-details.hbs", {
            movieDetails: response
        })
    })
    .catch((err) => {
        next(err)
    })
})

module.exports = router;
