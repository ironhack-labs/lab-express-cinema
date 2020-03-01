const express = require('express');
const router = express.Router();
const Movies = require('../models/Movies');

router.get('/', (req, res) => {
    const id = req.query.id;
    Movies.findById(id)
    .then((movie)=>{res.render('movie', {movie});
    })
  

});

module.exports = router;