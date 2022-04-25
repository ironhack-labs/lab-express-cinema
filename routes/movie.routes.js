const Movie = require("../models/Movie.model");

const router = require("express").Router();

router.get("/movies", (req, res, next) => {
    Movie.find()
        .then(moviesArray => {
            res.render("movies/movies", {movies: moviesArray})
        })
        .catch(err => {
            console.log("error getting books from DB", err)
            next(err);
        })
})

router.get("/movie/:id", (req, res, next) => {
    const id = req.params.id;

    Movie.findById(id)
        .then(movieDetails => {
            res.render("movies/movie-details", movieDetails)
        })
        .catch((err) => {
            console.log("Error getting books from db", err);
            next(err);
        })
})

router.get("/movies/:id/edit", (req, res, next) => {
    const id = req.params.id;

    Movie.findById(id)
        .then(movieToEdit => {
            res.render("movies/movie-edit", movieToEdit)
        })
        .catch((err) => {
            console.log("Error getting books from db", err);
            next(err);
        })
})

router.get("/movies/create", (req, res, next) => {
    res.render("movies/movie-create");
})

router.post("/movies/create", (req, res, next) => {
    const newMovie = {
        title: req.body.title,
        director: req.body.director,
        image: req.body.image,
        description: req.body.description
    }

    Movie.create(newMovie)
        .then(newMovie => {
            res.redirect("/movies");
        })
        .catch(err => {
            console.log("Error creating new book", err);
            next(err);
        })
})

module.exports = router;