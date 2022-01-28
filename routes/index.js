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


// router.get('/moviesPipo/:id', (req, res, next) => {
//     MoviePaco.findById(req.params.id)
//     // .then((yyy) => {
//     //     res.render('moviesPage', { ...yyy.toJSON() ,detail = true })
//     // })
//     .catch((e) => next(e)); 
// })



module.exports = router;