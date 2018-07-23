var express = require('express');
var router = express.Router();

const Movie = require('../models/movie')

/* GET movies listing. */
router.get('/', (req, res, next) => {
    Movie.find()
    .then((movies) => {
        res.render('movies', {movies})
    })
    .catch((error) => {
        next(error)
    })
});

router.get('/add', (req, res ,next) => {
    res.render('addMovie')
})

router.post('/add', (req, res, next ) => {
    const {title, director, stars, image, description, showtimes} = req.body;
    Movie.create({title, director, stars, image, description, showtimes})
    .then((data) => {
        console.log('Added movie')
        res.redirect('/')
    })
    .catch((error) => {
        console.log(error)
    })

})

router.get('/:id/update', (req, res, next ) => {
    const { id } = req.params;
    Movie.findById(id)
    .then((movie) => {
        res.render('edit', movie)
    })
    .catch((error) => {
        next(error)
    })
})

router.post('/:id/update', (req, res, next ) => {
    console.log('hola')
    const {id} = req.params;
    const {title, director, image, description} = req.body;
    Movie.findByIdAndUpdate(id, {title, director, image, description})
    .then((movie) => {
        console.log('Updated succesfully')
        res.redirect('/')
    })
    .catch((error) => {
        next(error)
    })
})





router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    Movie.findById(id)
    .then((movie) => {
        res.render('onlyMovie', movie)
    })
    .catch((error) => {
        next(error)
    })
});

router.get('/:id/delete', (req, res ,next) => {
    const { id } = req.params;
    Movie.findByIdAndRemove(id)
    .then(() => {
        console.log('Succes')
        res.redirect('/movies')
    })
    .catch((error) => {
        next(error)
    })
})



module.exports = router;
