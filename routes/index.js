const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movie page */
router.get('/movies', (req, res, next) =>{
    Movie.find()
    .then((movies) => {
        console.log(movies)
        res.render('movies', { movies })
    })
    .catch((e) => next(e));
})
/* GET details from a movie */
router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then((movie)=> {
        res.render("details", { movie })
    })
    .catch((e) => next(e))
})

module.exports = router;
