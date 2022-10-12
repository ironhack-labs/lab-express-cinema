const router = require('express').Router();

const Movie = require('../models/Movie.model.js');

router.get('/', async(req, res, next) => {
    try {
        const moviesFromDB = await Movie.find();
        res.status(200).json(moviesFromDB);
    } catch (error) {
        console.log('Erro ao pesquisar filmes.', error);
        next(error)
    }
});

module.exports = router;