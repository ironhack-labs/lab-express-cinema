const express = require('express');
const router = express.Router();
const Film = require('../models/film');

// Get movie details
router.get('/movie/details/:id', async (req, res, next) => {
    const { id } = req.params
    const movie = await getFilm(id)
    res.render('movie', { movie })
});



module.exports = router;
