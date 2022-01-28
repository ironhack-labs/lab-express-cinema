const express = require('express');
const router = express.Router();
const MoviePaco = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET Movies page */
router.get('/moviesPepe', (req, res, next) => {
    MoviePaco.find()
    .then((xxx) => {
        res.render('moviesPage', { xxx })
    })
    .catch((e) => next(e)); 
})


router.get('/moviesPepe/:id', (req, res, next) => {
    MoviePaco.findById(req.params.id)
    .then((yyy) => {
        console.log(yyy)
        res.render('moviesPage',{yyy})
    })
    .catch((e) => next(e)); 
})

module.exports = router;