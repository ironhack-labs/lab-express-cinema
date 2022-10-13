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

router.get('/:movieId', async (req, res, next) => {
    const { movieId } = req.params;
    try {
        const movieFromDB = await Movie.findById(movieId);
        res.status(200).json(movieFromDB)
    } catch (error) {
        console.log('Erro ao pesquisar filme.', error);
        next(error)
    }
})

module.exports = router;