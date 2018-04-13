const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie");
/* GET home page */
router.get('/', (req, res) => {
    Movie.find()
    .then(movies => {
        res.render('movies', {movies});
    } )
 
});

router.get('/:id', (req, res) => {
    Movie.findById(req.params.id)
    .then(movie => {
        res.render ('movie_id', {movie})
    } )
})

module.exports = router;