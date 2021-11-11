const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res) => {
    Movie.find()
        .then(data => res.render("movies", data))
        .catch(err => console.log(err))
})

router.get("/movie/:id", (req, res) => {
    // console.log(req.params.id)
    let { id } = req.params
    Movie.findById(id)
        .then(data => res.render("details", data))
        .catch(err => console.log(err))
})



module.exports = router;
