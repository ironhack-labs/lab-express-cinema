const router = require("express").Router();
const Movie = require('../models/Movie.model')

router.get('/movies', (req, res, next) => {
    Movie.find()
        .then((listOfMovies) => {
            const data = {
                moviesList: listOfMovies
            };
            res.render('movies', data)
        })
        .catch((error) => {
            console.log('An error occured, could not load movies list', error);
            next(error);
        });
})



module.exports = router;