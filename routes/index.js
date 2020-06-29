const express = require('express');
const router = express.Router();
const Film = require('../models/film');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

const getAllFilms = async () => {
    return await Film.find()
}
const getFilm = async (id) => {
    return await Film.find({ _id: id })
}

/* GET movies page */
router.get('/movies', async (req, res, next) => {
    const movies = await getAllFilms()
    res.render('movies', { movies })
});

// Get movie details
router.get('/movie/details/:id', async (req, res, next) => {
    const { id } = req.params
    const movie = await getFilm(id)
    res.render('movie', { movie })
});



module.exports = router;
