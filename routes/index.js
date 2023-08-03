const express = require('express');

const router = express.Router();

const Movie = require('./../models/Movie.model')


/* GET home page */
router.get('/', (req, res) => res.render('index'));

// Get movies page
router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(movies => {
            res.render('movies', { movies })
        })
        .catch(err => console.log(err))

})


//Get details page

router.get('/details/:_id', (req, res) => {

    const { _id } = req.params

    Movie
        .findById(_id)
        .then(movie => res.render('details', movie))
        .catch(err => console.log(err))

})


module.exports = router;