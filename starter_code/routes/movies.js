const express = require('express');
const router  = express.Router();
const Movie = require('../models/movie')

/* GET home page */
router.get('/', (req, res) => {
    
    Movie.find({})
    .then(films => {
        console.log('All movies: ', films)
        res.render('movies', { films });
    })
});


module.exports = router;
