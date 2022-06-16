const router = require('express').Router();
const Movie = require('../models/Movie.model');

router.get('/list', (req, res, next) => {
    Movie.find()
        .then(movies => {
            res.render('movies', {  movies })
        })
        .catch(err => {
            console.log('Error trying to get the movies ', err)
            next()
        })
})

//iteration 4 
router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movies => {
            res.render('movie-details', { movies })
        })
        .catch(err => {
            console.log('Error trying to get the movie ', err)
            next()
        })
})
//Exportamos 
module.exports = router;