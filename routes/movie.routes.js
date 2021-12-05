const router = require("express").Router();
const Movie = require('../models/Movie.model');

// Get a movie by id
router.get("/movie/:id", (req, res, next) => {
    Movie.findById(req.params.id)
    .then(movie => {
        res.render('movie', { movie: movie })
    })
    .catch(err => console.log(err));
});

module.exports = router;