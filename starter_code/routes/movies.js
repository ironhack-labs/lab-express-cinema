const express = require('express')
const router  = express.Router()

const Movies = require('../models/Movie.js')

router.get('/movies', (req, res) => {
    Movies.find({}, (err, movies) => {
        if(err) res.status(500).send(err)
        else res.render('movies.hbs', {movies})
    })
})

module.exports = router