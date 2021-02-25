const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie.model.js');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

// get the movies page

router.get('/movies', (req, res, next) =>{
   
    Movies.find()
    .then(movies => {
        res.render("movies", {
            list: movies
        })
    })
    .catch(error=> {console.log(error)})

})

//  get the links id page

router.get('/movies/:id', (req, res, next) =>{
    Movies.findById(req.params.id)
    .then((movie) => {
        res.render("movieDetails", {details: movie})
    })
    .catch((error) => {
        console.log(error)
    })
})

module.exports = router;


