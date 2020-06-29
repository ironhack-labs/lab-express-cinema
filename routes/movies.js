const express = require('express');
const router = express.Router();
const Film = require('../models/film');

const getAllFilms = async () => {
    console.log('test')
    return await Film.find()
}

/* GET movies page */
router.get('/movies', async (req, res, next) => {
    const movies = await getAllFilms()
    res.render('movies', { movies })
});

module.exports = router;
