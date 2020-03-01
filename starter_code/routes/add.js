const express = require('express');
const router = express.Router();
const Movies = require('../models/Movies');

router.get('/', (req, res, next) => {
    res.render('add');
});


router.post('/', (req, res, next) => {
    console.log(res.body) ;

    const { title, director, stars, image, description, showtimes } = req.body;
    const newmovie = new Movies ({ title, director, stars, image, description, showtimes })
    newmovie.save()
    .then((movie) => {
        console.log(movie);
        return res.redirect('/movie?id='+ movie.id);})
    .catch((error) => {
        console.log(error);})

});

module.exports = router;

