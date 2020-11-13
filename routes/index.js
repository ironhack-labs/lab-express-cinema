const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;

// const Movie = require('../models/Movie.model');

// /* GET movies page */
// router.get('/movies', (req, res, next) => {
//     Movie.find({}, {title: 1, image: 1})
//     .then((movie)=>{
//         res.render('movies', {movie})
//     })
//     .catch((error)=>{
//         console.log(error)
//         res.send(error)
//     })
// })