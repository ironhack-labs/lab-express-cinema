const express = require('express');
const router = express.Router();
const Movies = require('../models/Movies');

/* GET home page */
router.get('/', (req, res) => {

Movies.find()
    .then(movies => { res.render('list', {movies})
    })
});


module.exports = router;