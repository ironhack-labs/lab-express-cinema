const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')

// route /books

router.get('/', (req, response, next) => {

    Movie.find().then((moviesFromDB) => {

        console.log("just checking", moviesFromDB)
        response.render('movies', { allTheMovies: moviesFromDB }) 
        // passing an object, if it is an array >> make it a part of this object
        // { myMovies : [ { Title: Test 1 }, { Title: Test 2 }] } // { myMovies : arrayOfMovies }
        // if you name it myMovies, you need to use the same name in the template to pass the data
    })

});


// route /movies/:id
router.get('/:id', (req, response, next) => {

    // req.params.id

    Movie.findById(req.params.id).then((moviesFromDB) => {
        response.render('movie-details', moviesFromDB)
    })

});

module.exports = router;