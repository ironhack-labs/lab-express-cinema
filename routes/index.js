const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res) => {
    Movie.find().then(moviesArr => {
        res.render("movies", { moviesArr});
    })
});

router.get('/movies/:id', (req, res) => {
    const { id } = req.params;
    Movie.findById(id).then((oneMovie) => {
        console.log(oneMovie);
        res.render("individual-movie.hbs", {oneMovie})
    })
});

module.exports = router;
