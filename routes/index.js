const express = require('express');
const { find } = require('../models/Movie.model');
const router = express.Router();

const Movie = require('../models/Movie.model');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {

    Movie
        .find()
        .select({ title: 1 })
        .then(movies => {
            res.render('movies', { movies })
        })
        .catch(err => console.log(err))
})

router.get('/libros/detalles/:book_id', (req, res) => {

    const { book_id } = req.params

    Book
        .findById(book_id)
        .then(book => {
            res.render('books/details', book)
        })
        .catch(err => console.log(err))
})



module.exports = router;
