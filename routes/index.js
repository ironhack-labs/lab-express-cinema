const express = require('express');
const router = express.Router();


require('../db/index')
const movie = require('../models/Movie.model')
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res) => {

    movie
        .find()
        .then(movies => {
            res.render('movies', { movies })

        })
        .catch(err => console.log(err))
})
module.exports = router;
