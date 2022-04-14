const express = require('express');
const router = express.Router();

const Movie = require("./../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res) => {
   
    Movie
        .find()
        .then(movies => {
            res.render('movies', { movies })
        })
        .catch(err => console.log(err))
})

router.get("/movie/:id", (req, res) => {

    Movie
        .findById(req.params.id)
        .then(moviesID => {
            res.render('details',  moviesID )
        })
        .catch(err => console.log(err))
})

module.exports = router;
