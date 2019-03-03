const express = require('express');
const router = express.Router();
const Movie = require('../models/moviemodel');


router.get('/showmovie/:id', (req, res) =>
    Movie.findById(req.params.id, (err, movie) => {
        err ? res.status(500).send() : res.render('showmovie.hbs', { movie })

    })
);

module.exports = router;
