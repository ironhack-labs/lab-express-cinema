const express = require('express');
const router = express.Router();

const MovieModel=require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
/* router.get('/views/movies.hbs', (req, res, next) => res.render('movies.hbs')); */

router.get("/movies/:id", (request, response, next) => {
moviesDocument.findById(request.params.id)
.then((moviesDocument => {
    res.render("movies.hbs", { Movie: moviesDocument });
})
.catch((error) => {
    console.log(error);
});

module.exports = router;