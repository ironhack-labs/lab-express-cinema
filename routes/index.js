const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')

router.get("/", (req, res) => {
    res.render("index")
})


router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(movies => res.render('movies/movies', { movies }))
        .catch(err => console.log(err))
})





// books details
router.get('/movies/detalles/:_id', (req, res) => {

    const { _id } = req.params

    Movie
        .findById(_id)
        .then(movies => res.render('movies/details', movies))
        .catch(err => console.log(err))
})

module.exports = router