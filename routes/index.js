const express = require('express'); //link with express
const router = express.Router(); //using express router management
const MovieModel = require("./../models/Movie.model.js") //link with the model I created in ./../models/Movie.models.js use tab to have the correct path

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */
router.get('/movies', (req, res, next) => res.render('movies.hbs'));
// RENDER what the page s going to print if we had said "olala" we would have an empty page with olala
// here we want too display the content created in the movies.hbs

router.get('/movies/:id', (req, res, next) => {
    // MovieModel.findById()  SEE COHORT CINEMA WE FIRST NEED TO FIND A MOVIE IN THE DB THEN CALL THE RESULT "MOVIE"
    
    res.render('movie.hbs')});

module.exports = router;
