const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res,) => res.render('index'));



router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(movies => res.render('Movies/movies', { movies }))
        .catch(err => console.log(err))

})

router.get('/movies/details/:id', (req, res) => {
    const { _id } = req.params

    Movie
        .findById(_id)
        .then(movies => res.render('details', movies))
        .catch(err => console.log(err))

})




module.exports = router;
