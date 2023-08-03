const express = require('express');
const router = express.Router();

const Film = require('./../models/Films.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/cartelera', (req, res, next) => {

    Film
        .find()
        .sort({ title: 1 })
        .then(films => res.render('films/directory', { films }))
        .catch(err => console.log(err))
})

router.get('/peliculas/detalles/:film_id', (req, res, next) => {
    const { film_id } = req.params

    Film
        .findById(film_id)
        .then(film => res.render('films/details', film))
        .catch(err => console.log('err'))
})

module.exports = router;
