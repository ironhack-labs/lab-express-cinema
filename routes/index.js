const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next)=>{
    Movie.find({}, {title: 1, image: 1, id: 1})
        .then((movies)=>{
            res.render('movies', {movies});
            // res.send(movies);
        })
        .catch((err)=>{
            console.log(err);
            res.send(err);
        });
});

router.get('/movie/:id', (req, res, next)=>{
    const id = req.params.id;
    Movie.findById(id)
        .then((movie)=>{
            res.render('singleMovie', movie);
        })
        .catch((err)=>res.send(err));

});


module.exports = router;
