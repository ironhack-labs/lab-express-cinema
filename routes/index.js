const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

// router.get('/movies', (req,res) =>{
//     Movie.find()
//     .then(allMovies => {
//         console.log(allMovies.length)
//         res.render('movies', {allMovies})
//     })
//     .catch((err)=> console.log('There has been an error',err))
// })

module.exports = router;
