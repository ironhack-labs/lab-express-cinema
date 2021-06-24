const express = require('express');
const router = express.Router();

const Cinema = require('./../models/movie.model')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res) => {

    Cinema
        .find()
        .then(movies => {
            console.log('List of Data', movies)
            res.render('movies', { movies })
        })
        .catch(err => console.log(err))
})

router.get('/movie/:id', (req, res) => {
    const { movieId } = req.params
    Cinema
        .find(movieId)
        .then(movie => {
            console.log('Data of movie', movie)
            res.render('movie', movie)
        })
        .catch(err => console.log(err))
})





module.exports = router;
