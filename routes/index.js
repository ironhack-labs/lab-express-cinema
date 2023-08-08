const express = require('express');
const router = express.Router();



const MovieModel = require('./../models/Movie.model');

router.get("/", (req, res) => {

    res.render('home')

})

router.get("/peliculas", (req, res) => {

    MovieModel

        .find()
        .then(movies => res.render('peliculas', { movies }))
        .catch(err => console.log(err))
})

router.get('/detalles/:movies_id', (req, res) => {

    const { movies_id } = req.params

    MovieModel
        .findById(movies_id)
        .then(movie => res.render('detalles', movie))
        .catch(err => console.log(err))

})
module.exports = router;
