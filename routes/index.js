const express = require('express');
const MovieModel = require('../models/Movie.model')
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//Movies page
router.get('/movies', (req, res) => {
    MovieModel 
    .find()
    .then(movies => res.render('movies-page', { movies }))
    .catch(err => console.log(err))
})

//See more page

router.get('/movie/:id', (req, res) => {
    const {id} = req.params

    MovieModel
    .findById(id)
    .then(movieDetails => res.render('see-more', movieDetails))
    .catch(err => console.log(err))

})

module.exports = router;
