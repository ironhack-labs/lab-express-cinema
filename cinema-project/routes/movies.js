
const express = require('express');
const router  = express.Router();
const Movie   = require ('../models/movie')

router.get('/', (req, res, next)=>{
    Movie.find()
    .then((listOfMovies)=>{
    res.render('movies', {moviesArray: listOfMovies});
    })
    .catch((err)=>{
        res.send(err);
    })
})

router.get('/:id', (req, res, next)=>{
    const theID = req.params.id;

    Movie.findById(theID)
    .then((theMovie)=>{
        res.render('movie', {movie: theMovie})
    })
    .catch((err)=>{
        res.send(err);
    })

});

router.post('/movie', (req, res, next)=>{
    res.send(req.body);
})

module.exports = router;
