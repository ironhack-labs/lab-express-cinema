const express = require('express');
const router = express.Router();
//aquí traigo el modelo Movies
const Movies = require("../models/Movie.models")




/* GET home page */
router.get('/', (req, res, next) => res.render('index.hbs'));

//página de todas las pelis
router.get("/movies", (req, res, next) => {

    Movies.find() //llamo a todas las pelis
    .then((response) => {
        console.log(response);
        res.render("movies/movies.hbs", {
            allMovies: response
        })
    })

    .catch((err) => {
        next(err)
    })

    
})

//página de los detalles
router.get("/movies/:id", (req, res, next) => {

    Movies.findById(req.params.id)
    .then((response) => {
        console.log(response);
        res.render("movies/movies-detail", {
            detailMovie: response
        })
    })

    .catch((err) => {
        console.log(err);
    })
})

module.exports = router;
