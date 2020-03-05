const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie')

// GET movies page
router.get('/', (req, res) => {
    Movie.find({})
    .then(films => {
        console.log('All movies: ', films)
        res.render('movies', { films });
    })
});

// GET movie information page
router.get('/detail/:id', (req, res) => {
    const { id } = req.params;
    Movie.findById(id)
    .then(filmsInfo => {
        res.render('movieInfo', { filmsInfo })
    })
})

// GET movie form page "add"
router.get('/add', (req, res) => { 
    res.render('form')
})

// POST create new movie
router.post('/', (req, res, next) => {
    const { title, director, stars, image, description, showtimes } = req.body;
    Movie.create({
        title,
        director,
        stars,
        image,
        description,
        showtimes,
    })
    .then(() => {
        res.redirect('/movies');
    })
    .catch(next);
})

// POST delete movie
router.post('/detail/:id/delete', (req, res ,next) => {
    const { id } = req.params;
    Movie.findByIdAndDelete(id)
    .then(() => {
        res.redirect('/movies');
    })
})

// GET movie form page "update"
router.get('/detail/:id/update', (req, res, next) => {
    const { id } = req.params;
    Movie.findById(id)
    .then(specificFilmInfo => {
        res.render('update', { specificFilmInfo })
    })
    .catch(next);    
})

router.post('/detail/:id', (req, res) => {
    const { id } = req.params;
    console.log('THIS IS THE ID: ',id)
    const { title, director, stars, image, description, showtimes } = req.body;
    Movie.findByIdAndUpdate(id, {
        title,
        director,
        stars,
        image,
        description,
        showtimes,
    })
    .then(() => {
        res.redirect(`/movies/detail/${id}`);
    })
})


module.exports = router;
