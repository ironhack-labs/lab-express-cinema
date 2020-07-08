const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((movies) =>{        
        res.render('movies',{movies})
    })
    .catch(error => console.log('error finding movies',error))
});

router.get('/movie/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then((movie) =>{        
        console.log(movie)
        res.render('movie-details',{movie})
    })
    .catch(error => console.log('error finding movies',error))
});


module.exports = router;