const express = require('express');
const router = express.Router();

const Movie = require("./../models/Movie.model")

/* GET Base URL */
router.get('/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then(movie => res.render("detail",
            movie
        ))
        .catch(err => console.log(`There was an error with the DDBB`))

});

module.exports = router;