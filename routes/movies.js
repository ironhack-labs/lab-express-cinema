const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie.model')

router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(movies => {
            res.render('movies', { movies })
        })
        .catch(err => console.log(err))
})

router.get('/moviedetails/:id', (req, res) => {
    const { id } = req.params
    Movie
        .findById(id)
        .then(data => {
            res.render('moviedetails', data)
        })
        .catch(err => console.log(err))
})

module.exports = router;