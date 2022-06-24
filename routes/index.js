const express = require('express');
const Movie = require('./../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;

router.get('/movies', (req, res) => {
    console.log("No arriesgo")

    Movie
        .find()
        // .select({ title: 1, description: 1, image: 1 })
        .then(movies => {
            res.render('movies', { movies })
        })
        .catch(err => console.log(err))
})
