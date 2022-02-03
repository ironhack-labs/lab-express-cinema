const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')

///movies list


const moviesPage = router.get('/movies', (req, res, next) => {

    Movie
        .find()
        //console.log(Movies)
        .then(films => res.render('movies', { films }))
})
router.get('/movies/:id', (req, res) => {
    Movie
        .findById(req.params.id)
        .then(film => res.render('details', film))

}
)
module.exports = moviesPage