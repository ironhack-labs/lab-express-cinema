const express = require('express')
const router = express.Router()
const Movie = require('./../models/Movie')



router.get('/', async(req, res, next) => {
    const movies = await Movie.find()
    res.render('movies', {movies})
})




module.exports = router;