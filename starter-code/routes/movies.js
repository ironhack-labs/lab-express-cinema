var express = require('express');
var router = express.Router();

const Film = require('../models/movie.js');

/* GET home page. */
router.get('/', (req, res, next) => {
    Film.find({})
    .then((data) => {
        res.render('movies', {data});
    })
    .catch((err) => {
        next(err);
    })
});

router.get('/:id', (req, res, next) => {
    const patata = req.params.id
    Film.findById(patata)
    .then((data) => {
        res.render('film', { data })
    })
})

module.exports = router;
