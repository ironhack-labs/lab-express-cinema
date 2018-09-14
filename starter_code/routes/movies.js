const express = require('express');
const router  = express.Router();
const Movie   = require('../models/MoviesModel');


/* GET home page */
router.get('/movies', (req, res, next) => {
    
    Movie.find()
    .then(movies => {
        console.log('KJSABFKJASBDFKJABSDFKJASBDFKJASBDFsaojgfaerbg');
        res.render('movies', {movies});
    })
    .catch(e => {
        console.log(e);
    })
   // mongoose.connection.close()
});

module.exports = router;
