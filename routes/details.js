const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model')

router.get('/:id', (req, res) => {
    Movie.findById(req.params.id)
        .then(theMovie => res.render('details', {theMovie}))
        .catch(err => console.log("Error al conectar con la película", err))
})

module.exports = router