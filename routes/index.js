const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => {
     res.render('index')
});

router.get("/save-database", (req, res) => { 
    Movie.create(movies).then((data) => {
        res.send("Movies created")
    });
});

router.get("/all-movies", (req, res) => {
    Movie.find().then((data) => {
        res.render("movies", { movies: data});
      
    });
});

router.get("/movies/:id", (req, res) => {
    Movie.findById(req.params.id).then((data) => {
        res.render("movies", { movies: data});
    });
});



module.exports = router;
