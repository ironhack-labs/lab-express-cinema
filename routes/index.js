const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    return Movie.find()
    .then((movies) => {
        console.log(movies);
        res.render('movies',{movies});
    })
    .catch((err) => {console.log("error",err);});
});

router.get('/movie/:id', (req, res, next) => {
    return Movie.findById(req.params.id)
    .then((movies) => {
        console.log(movies);
        res.render('movie-details',{movies});
    })
    .catch((err) => {console.log("error",err);});
});


module.exports = router;
