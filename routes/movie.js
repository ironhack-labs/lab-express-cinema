const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js');

router.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then((movie) => {
        res.render("movie", movie )
    })
    .catch((e) => next(e));
});

module.exports = router;