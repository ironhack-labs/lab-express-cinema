const express = require('express');
const MovieModel = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res, next) =>  {
    try {
        res.render('movies', {
            movies: await MovieModel.find(),
        });
    } catch (dbErr) {
    console.log(dbErr);
    next(dbErr);
    }
});

module.exports = router;
