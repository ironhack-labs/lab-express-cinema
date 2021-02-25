const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


const MovieModel = require("../models/Movie.model");
let moviesData;



router.get("/movies", (req, res, next) => {
    MovieModel.find()
        .then((result) => {
            moviesData = result;
            let dataToSend = {
                movies: moviesData
            }
            res.render('movies', dataToSend);
        }).catch((err) => {
            console.log(err);
        });
});


router.get("/movie/:id", (req, res, next) => {
    console.log("on est dans la route");
    let film;
    MovieModel.findById(req.params.id)
        .then((result) => {
            film = result;
            let dataToSend = {
                movie: film
            }
            res.render('movie', dataToSend);
        }).catch((err) => {
            console.log(err);
        });

});


router.get("*", (req, res, next) => {
    res.send("sorry not found");
});



module.exports = router;