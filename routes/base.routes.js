const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')

// Endpoints
router.get('/', (req, res) => res.render('index'))

router.get('/movies', (req, res) => {
   
    Movie.find()
        .then (movies => res.render('movies-list',{ movies }))
        .catch(err => console.log('ERROR:', err))

    
})

router.get('/movies/details/:movie_id', (req, res) => {
   const movDetail = req.param.movie_id
    Movie.findById(movDetail)
        .then (chosenMovie => res.render('movies-list',chosenMovie))
        .catch(err => console.log('ERROR:', err))

    
})




module.exports = router
