const express = require('express');
const router = express.Router();
const Movies = require('../models/Movies.model.js');

router.get('/:movieId', (req, res) =>{
    const { movieId } =  req.params

    Movies.findById(movieId)
    .then(details => {
        res.render('details', { details })
    })
})

module.exports = router;