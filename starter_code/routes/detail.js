const express = require('express');
const router  = express.Router();
const Movie   = require('../models/MoviesModel');


/* GET home page */
router.get('/detail/:id', (req, res, next) => {
    let movieId = req.params.id;
    Movie.findOne({'_id': movieId})
    .then(movie => {
        console.log('ENTRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
        res.render('detail', { movie });
    })
    .catch(e => {
        console.log(e);
    })
   // mongoose.connection.close()
});

module.exports = router;
