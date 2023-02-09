const express = require('express');
const router = express.Router();

const Movies = require('./../models/Movie.model')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {

    Movies
        .find()
        .then(movies => {

            res.render('movies', { movies })
        })
        .catch(err => console.log(err))
})

router.get('/movies/:movies_Id', (req, res) => {
    const { movies_Id } = req.params

    Movies
        .findById(movies_Id)
        .then(movies => {

            res.render('movies-details', { movies })
        })
        .catch(err => console.log(err))
})

module.exports = router;
