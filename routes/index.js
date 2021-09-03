const express = require('express');
const router = express.Router();
const Cinema = require('./../models/Movie.model')


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Cinema
        .find()
        .then(movies => res.render('movies', { movies }))
        .catch((err) => console.log('ERROR', err))
})

router.get('/movie/:id', (req, res) => {
    const { id } = req.params
    Cinema
        .findById(id)
        .then(movieDetails => res.render('movie', movieDetails ))
        .catch((err) => console.log('ERROR', err))
})




module.exports = router;
