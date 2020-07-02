const express = require('express');
const router = express.Router();
const Movies = require ('../models/movie.model');


router.get('/movies', (req, res, next) => {
    Movies.find()
        .then(movieAll => {
            console.log(movieAll);
            res.render('movies', {movieAll})
        })
        .catch(e => console.log("Error movies", e))
})

module.exports = router;