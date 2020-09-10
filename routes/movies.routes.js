
const express = require('express')
const router = express.Router()

const Movies = require('../models/movie.model')


router.get('/', (req, res) => {
    
    Movies.find()
        .then((allMovies) => res.render('movies', {allMovies}))
        .catch((err) => err => console.log("ERRORR", err));

})

module.exports = router