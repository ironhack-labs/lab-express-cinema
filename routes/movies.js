const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');


router.get('/movies', (req, res, next) => {
    Movie.find()
    .then( data => {
    res.render('movies', {data})
    })
    .catch (err => {console.log(`An error occured getting the movies from DB: ${err}`)})
});

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then( data => {
        console.log(data)
        res.render('movie-details', data)
    })
    .catch(err => {console.log(`An error has occured loading the details of the movie: ${err}`)})
});

router.get('/new-movie', (req, res, next) => {
    res.render('new-movie')
});

router.post('/new-movie', (req, res, next) => {
    const {title, director, stars, image, description, showtimes} = req.body;
    Movie.create({ title, director, stars, image, description, showtimes })
        .then( () => {
            res.redirect('/movies')
        })
});

router.get('/movies/:id/edit', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(data => {
            res.render('edit', data)
        })
        .catch (err => {
            console.log(`An error occured: ${err}`)
        })
});

router.post('/movies/:id/edit', (req, res, next) => {
    const  {title, director, stars, description} = req.body
    const updatedMovie = {
        title,
        director,
        stars,
        description,
    }
    Movie.findByIdAndUpdate(req.params.id, updatedMovie)
        .then((data) => {
            res.redirect(`/movies/${data.id}`)
        })
        .catch(err => {
            console.log(`An error occured: ${err}`)
        })
});

router.post('/movies/:id/delete', (req, res, next) => {
    Movie.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            throw console.error(err);
        } else {
            res.redirect('/movies')
        }
    })
})



module.exports = router;
