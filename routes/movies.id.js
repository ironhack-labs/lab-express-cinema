const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model.js')

router.get('/movies/:movieID', async (req, res, next) => {
    console.log('SINGLE MOVIE ROUTE')
    
    const { movieID } = req.params
    console.log(movieID)

    const myMovie = await Movie.findById(movieID).exec()

    res.render('movies-details', {
        movie: myMovie
    })
})

module.exports = router