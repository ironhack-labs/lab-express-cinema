const express = require('express')
const router = express.Router()

const Movie = require("../models/Movie.model")


router.get('/', (req, res) => {

    Movie.find()
        .then(allMovies => res.render("movies-page", {allMovies}))
        .catch(err => console.log('ERROR:', err))
})

router.get("/details/:movie_id", (req, res) => {
    const id = req.params.movie_id
    
    Movie.findById(id)
        .then(detailMovie => res.render("movie-detail", detailMovie))
        .catch(err => console.log('ERROR:', err))
})


module.exports = router