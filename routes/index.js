const express = require('express');
const router = express.Router();
const Movie = require('./../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => res.render('index', { css: ['/stylesheets/mods/mod.index.css']}));

router.get('/movies', async (req, res, next) => { 
    res.render('movies', { movies:  await Movie.find(), css: ['/stylesheets/mods/mod.list.css'] } );
});

router.get('/movie/:id', async (req, res, next) => {
    res.render('movie', { movie:  await Movie.findById(req.params.id), css: ['/stylesheets/mods/mod.list.css'] });
}) ; 

module.exports = router;
