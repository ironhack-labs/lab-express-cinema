const express = require('express');
const Movie = require('../models/Movie.model'); //movie es la referencia a la colección movies de la base de datos
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res) => {

    Movie
        .find()
        .sort()
        .then(movieList => {
            // console.log({ movieList })
            res.render('movies', { movieList })
        })
        .catch(err => console.log(err))


})

router.get('/details/:movies_id', (req, res) => {
    // :los dos punos y el nobre del parámetro,  para acceder a la información concreta que queremos que devuelva

    const { movies_id } = req.params

    Movie
        .findById(movies_id)
        .then(theMovie => res.render('details', theMovie))
        .catch(err => console.log(err))

})








module.exports = router;
