const express = require("express");
const router  = express.Router();
const mongoose = require('mongoose');
const Movie = require("../models/movie.js");
const Director = require('../models/director.js');


/* Show all movies */
router.get("/movies", (req, res)=> {
    Movie.find({})
    .then((movies) => {
        res.render("movies", {movies})
    })
    .catch((err)=> {
        res.send(err)
    })
});


/* Show details of one movie */
router.get('/movie', (req, res) => {
    Movie.findById(req.query.id)
    .populate('director')
    .then((movie) => {
        res.render('movie', {movie});
    })
    .catch((err) => {
        res.send(err);
    });
});


/* Create a movie */
router.get('/movies/create', (req, res) => { 
    Director.find({})
    .then((directors) => {
        res.render('create-movie', {directors});
    })
    .catch((err) => {
        res.send(err);
    });
});

router.post('/movies/create', (req, res) => { 
    let starsInput = req.body.stars
    let director = req.body.director
    Movie.create ({
        title: req.body.title,
        director: mongoose.Types.ObjectId(director),
        stars: starsInput.split(','),
        description: req.body.description,
        image: req.body.image
    })
    .then((movie) => {
      res.redirect('/movies');
    })
    .catch((err) => {
      res.send(err);
    });
});


/* Delete a movie */
router.get('/movie/delete', (req, res) => {
    Movie.findByIdAndRemove(req.query.id)
    .then((movie) => {     
        res.redirect("/movies");
    })
    .catch((err) => {
        res.send(err);
    })
});


/* Update a movie */
router.get('/movie/update', (req, res) => {
    Movie.findById(req.query.id)
    .populate('director')
    .then((movie) => {
        Director.find({})
        .then((directors) => {
            res.render('update-movie', {movie, directors});  
        })
        .catch((err) => {
            res.send(err);
        })
    })
    .catch((error) => {
        res.send(err);
    })
});

router.post('/movie/update', (req, res, next) => {
    Movie.findByIdAndUpdate(req.body.id, req.body)
    .then((movie) => {
        res.redirect('/movies');
    })
    .catch((err) => {
        res.send(err);
    })
});


module.exports = router;
