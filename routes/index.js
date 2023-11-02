const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res) => {
    console.log("it's working")
    res.render('index')

});

router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(movies => {
            res.render("movies", { movies })
        })
        .catch(err => console.log("LA ESTÁS LIANDO", err))

});

router.get('/movie/:movie_id', (req, res) => {

    const { movie_id } = req.params

    Movie
        .findById(movie_id)
        .then(movie => {
            console.log({ movie })
            res.render('movie', { movie })
        })
        .catch(err => console.log(err))
})




module.exports = router;
