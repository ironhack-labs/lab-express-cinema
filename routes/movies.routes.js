const express = require('express')
const router = express.Router()

const Film = require('../models/Movie.model')
const { route } = require('./base.routes')

// Endpoints
router.get('/all', (req, res) => {

    Film.find()
        .then((films) => {

            res.render('movies', { films })

        })
        .catch(error => console.log('ERROR: ', error))

})

router.get('/:id', (req, res) => {

    Film.findById(req.params.id)
        .then((film) => {

            console.log(film)

            res.render('details', film)

        })

})

module.exports = router