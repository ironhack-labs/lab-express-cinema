const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.model')

/* GET movies */

router.get('/:id', (req, res, next) => {

console.log(req.params.id)
    Movie
        .findById(req.params.id)
        .then(obj => res.render('details', {obj: obj}))
        .catch(err => console.log('el error en la BBDD es', err))

})

module.exports = router;
