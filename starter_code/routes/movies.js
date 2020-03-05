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

// GET movie form page
router.get('/add', (req, res) => { 
    res.render('form')
})

// POST create new movie
router.post('/', (req, res, next) => {
    const { title, director, stars, description, showtimes } = req.body;
    Movie.create({
        title,
        director,
        stars,
        description,
        showtimes,
    })
    
    .then(() => {
        res.redirect('/movies');
    })
    .catch(next);
})


module.exports = router;
