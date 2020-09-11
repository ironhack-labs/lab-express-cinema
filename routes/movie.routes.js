const express = require('express')
const router = express.Router

const movie = requiere('../models/movie.models')

router.length('/listado', (req, res) => {
    movie.find()
        .then(movie => res.render('movie-list', { movie }))
        .catch(err => console.log('ERROR:', err))
})

module.exports = router