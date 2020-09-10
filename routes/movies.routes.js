const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')

router.get('/list', (req, res) => {

    Movie.find()
        .then(movies => res.render('movies',{movies}))
        .catch(err => console.log('error', err))

})

router.get('/details/:movie_id', (req, res) => {

    const id = req.params.movie_id

    Movie.findById(id)
        .then(movieDetails => res.render('movie-details', movieDetails))
        .catch(err => console.log("ERRORR", err))
})




module.exports = router