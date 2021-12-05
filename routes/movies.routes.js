const router = require("express").Router();
const Movies = require('../models/Movie.model');

// Get all movies
router.get("/", (req, res, next) => {
    Movies.find()
        .then(movies => {
            console.log('Movies', movies);
            res.render('movies', { movies });
        })
        .catch(err => console.log(err));
});

module.exports = router;