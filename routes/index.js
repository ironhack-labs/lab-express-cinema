const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movie/:id", (req, res, next) => {
    console.log("entro aqui");
    const {
        id
    } = req.params;

    Movies.findById(id)
        .then(prueba => {
            console.log(prueba);
            res.render("movie", {
                movie: prueba
            })

        }).catch(e => {
            next(e)
        })



})


router.get("/movies", (req, res, next) => {
    console.log("llego al movies");

    Movies.find({})
        .then(rs => {
            console.log(rs);
            res.render("movies", {
                movie: rs
            })
        }).catch(e => {
            next(e);
        })


})

module.exports = router;
