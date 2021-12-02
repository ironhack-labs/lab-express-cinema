const express = require('express');
const router = express.Router();
const app = express();
const Movie = require("../models/Movie.model");


/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index')
});

router.get('/movies', (req, res, next) => {
    Movie.find().then(movies => {
        res.render('movies', { movies })
    }).
    catch(err => {
        console.log("Error", err)
    })

});

router.get('/movie/:movieTitle', (req, res, next) => {
    const { movieTitle } = req.params
    Movie.find({ title: movieTitle }).then(movie => {
        const movieData = movie[0]
        console.log(movieData)
        res.render('movie', { movieData });
    }).
    catch(err => {
        console.log("Error", err)
    })

});



module.exports = router;