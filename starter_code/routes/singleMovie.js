const express = require('express')
const router  = express.Router()

const Movies = require('../models/Movie.js')

router.get('/movie/:id', (req, res) => {
    Movies.findById(req.params.id, (err, movie) => {
        if(err) res.status(500).send(err)
        else res.render('singleMovie.hbs', {movie})
    })
})

module.exports = router