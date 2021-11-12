const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get("/movie-list", (req, res, next) => {

    Movie.find()
        .then(allTheMovies => res.render("movie-list", { allTheMovies }))
        .catch(err => console.log(err))

});






module.exports = router;
