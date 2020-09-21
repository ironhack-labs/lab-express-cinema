const express = require('express');
const Model = require('../models/model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async(req, res, next) => {
    try {
        const movies = await Model.find();
        res.render('movies', { movies: movies });
    } catch (err) {
        console.log(err);
    }
});

router.get('/movie/:id', async(req, res, next) => {
    try {
        console.log("toto");
        const movie = await Model.findById(req.params.id);
        res.render('movie-detail', { movie: movie });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;