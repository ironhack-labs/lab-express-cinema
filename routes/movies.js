const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js');

router.get("/", (req, res, next) => {
    Movie.find()
    .then(movies => res.render('movies/movies', { movies }))
    .catch(error => console.log('Error while getting the celebrities from the DB: ', error))
  });

router.get("/:id",(req, res, next) => {
    console.log(req.params.id)
    Movie.findById(req.params.id)
        .then(theMovie => {
            res.render('movies/show', {
                theMovie
            });
        }).catch(error => {
            next(error);
        });
});
module.exports = router;