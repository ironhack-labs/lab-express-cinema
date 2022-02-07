const express = require('express');
const router = express.Router();
const MovieModel = require('./../models/Movie.model');

/* GET home page */
router.get('/', async (req, res, next) => {
    try {
        const movies = await MovieModel.find();
        // res.send(`Res.sending movies from db: ${}`);
        // res.send(movies);
        res.render("movies", { movies });
    } catch(err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const movieDetails = await MovieModel.findById(id);
        // res.send(`Res.sending movies from db: ${}`);
        res.render("movieDetails", { movieDetails });
        // res.send(movieDetails);
    } catch(err) {
        next(err);
    }
});


module.exports = router;