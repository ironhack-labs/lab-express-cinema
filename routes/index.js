const express = require('express');
const router = express.Router();
const Movie = require('./models/Movie.model.js');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => 
    {
        Movie.find()
        .then(data => {
            res.render('movies', {movies: data})
        })
    }
    
);

router.get('/movies/:id', (req, res, next) => 
    {
        Movie.findById(req.params.id)
        .then(data => {
            res.render('details', {details: data})
        })
    }
    
);

module.exports = router;
