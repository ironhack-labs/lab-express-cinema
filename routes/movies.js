const express = require('express')
const router = express.Router()



const Movie = require('../models/Movie.model')


router.get('/movies', (req, res) => {
    Movie.find()
        .then(mov => res.render("movies", { mov }))
        .catch(err => console.log(err))
})