const Movie = require('../models/Movie.model')
const router = require('express').Router()

router.get('/movies', (req, res, next) =>{
    Movie.find()
    .then(movieArray => {
        res.render('movies/movie-list.hbs', {movieArray: movieArray})
    })
    .catch(err => {
        console.log(err)
        next(err)
    })
})

router.get("/movies/create", (req, res, next) => {
    res.render('movies/movie-create')
})

router.post("/movies/create", (req, res, next) => {
    console.log(req.body)
    const newMovie = {
        title: req.body.title,
        image: req.body.image,
        director: req.body.director,
        stars: req.body.stars,
        description: req.body.description,
        showtime: req.body.showtime
    }
    Movie.create(newMovie)
    .then( () => {
        res.redirect('/movies')
    })
    .catch(err => {
        console.log(err)
        next(err)
    })
})

router.get('/movies/:_id', (req, res, next) =>{
    Movie.findById(req.params._id)
    .then(movie =>{
        res.render('movies/movie-page',{movie: movie})
    })
    .catch(err => {
        console.log(err)
        next(err)
    })
})

router.get("/movies/:_id/edit", (req, res, next) => {
    Movie.findById(req.params._id)
    .then(movie => {
        res.render('movies/movie-edit', {movie})
    })
})

router.post("/movies/:_id/edit", (req, res, next) => {
    const updatedMovie = {
        title: req.body.title,
        image: req.body.image,
        director: req.body.director,
        stars: req.body.stars,
        description: req.body.description,
        showtime: req.body.showtime
    }
    Movie.findOneAndReplace(req.params._id, updatedMovie)
    .then(response => {
        res.redirect(`/movies/${response._id}`)
    })
    .catch(err => {
        next(err)
    })

})

module.exports = router