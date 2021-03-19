const express = require('express');
const router = express.Router();
const Movies = require('../models/Movies.model.js');

router.get('/', (req, res) =>{
    Movies.find()
    .then(movies => {
        res.render('movies', { movies })
    })
})

module.exports = router;