const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));





router.get("/movies", (req, res, next) => {
    Movie.find()
        .then((moviesFromDB) => {
            console.log(moviesFromDB);
            res.render("movies", {
                movies: moviesFromDB
            })
        })
        .catch(err => console.log("oops, there was an error" + err))

})

router.get("/movie/:id", (req, res, next) => {
    const id = req.params.id

    Movie.findById(id)
    .then((movieDetails) => {
        res.render("movie-details", movieDetails)
    })
    .catch(err => console.log("oops, there was an error" + err))
})

router.get("/movies/create", (req, res, post) => {
    res.render("new-movie")
})

router.post("/movies/create", (req, res, post) => {
    const newMovie = {
        title: req.body.title,
        director: req.body.director,
        stars: req.body.stars,
        image: req.body.image,
        description: req.body.description,
        showtimes: req.body.showtimes,
        
    }

    Movie.create(newMovie)
    .then( (movieFromDB) => {
        res.redirect("/movies")
    })
    .catch(err => console.log("oops, there was an error" + err))
});

router.get("/movies/:id/edit", (req, res, post) => {
    const id = req.params.id

    Movie.findById(id)
    .then( (movieDetails) => {
        res.render("movie-edit", movieDetails)
    })
    .catch(err => console.log("oops, there was an error" + err))
    
})

router.post("/movies/:id/edit", (req, res, post) => {
    const id = req.params.id

    const newDetails = {
        title: req.body.title,
        director: req.body.director,

    }

    Movie.findByIdAndUpdate(id, newDetails)
        .then((movieFromDB) => {
            res.redirect(`/movies`);
        })
        .catch(err => console.log("oops, there was an error" + err))
});




module.exports = router;
