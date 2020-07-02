const express = require('express');
const router = express.Router();
const Movies = require ('../models/movie.model');

// router.get('/', (req, res, next) => res.render('movie'));

router.get('/movie/:id', (req, res, next) => {
    console.log('holholahola');
    console.log('movies', req.params.id);
      Movies.find({'_id': req.params.id})
          .then(movie => {
            console.log(movie[0]);
              res.render('movie', {'movie' : movie[0]})
          })
          .catch(e => console.log("Error movies", e))
    })
    // console.log(router);

module.exports = router;