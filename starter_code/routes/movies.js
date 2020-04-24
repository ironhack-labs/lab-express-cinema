const express=require('express');
const router=express.Router();
const Movie=require('../models/Movie');

router.get('/movies', (req,res, next) => {
    Movie.find().then(movie => {
        //res.send(movies);
     res.render('movies', {movie});
    })
    .catch(err => next(err));
});

router.get('/movies/:id', (req,res, next) =>{
    Movie.findById(req.params.id)
    .then( ( movie ) =>{
        //res.send(movie);
        res.render('details', {movie} )
    })
        .catch(err => {
            next(err);
        });
});

module.exports=router;