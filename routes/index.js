const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js')
    /* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {

    //console.log(Movie)
    Movie
        .find()
        .select({ title: 1, image: 1 })
        .then(data => {
            res.render('movies', { data })
        })
        .catch(err => console.log(err))
})


router.get('/movieDetails/:id', (req, res) => {
    const { id } = req.params
    console.log(id)
    Movie
        .findById(id)
        .then(data => {
            console.log("este:-Z", data)
            res.render('movieDetails', data)
        })
        .catch(err => console.log(err))
})

module.exports = router;