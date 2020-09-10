const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')



// Endpoints
router.get('/movies', (req, res) => {

    Movie.find()
        .then(movies => res.render('movies', { movies }))
        .catch(err => console.log('ERROR:', err))
})


module.exports = router