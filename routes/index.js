const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies',async (req,res) => {
    try {
        const movies = await Movie.find();

        res.render('movies', {movies});
    }
    catch (error) {
        console.error(error);
    }
   
});

router.get('/movies/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const movie = await Movie.findById(id);
        console.log('length:'+movie.length);
        res.render('movies-detail', movie);
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;
