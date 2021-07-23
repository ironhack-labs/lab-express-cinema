const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")
/* GET home page */

router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next)=> {
    Movie.find()
    .then((movieList) => res.render('movies', {movieList}))
    .catch((error)=> console.log(error))
})

router.get('/movie/:id', (req, res, next)=> {
    const id= req.params.id
    Movie.findById(id)
.then((selectedMovie) => res.render('detailpage', selectedMovie))
    .catch((error)=> console.log(error))
})


module.exports = router;
