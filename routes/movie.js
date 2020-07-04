const express = require('express');
const router = express.Router();
const Movies = require ('../models/movie.model');



router.get('/movie/:id', (req, res, next) => {
      Movies.find({'_id': req.params.id})
          .then(movie => {
              res.render('movie', {'movie' : movie[0]})
          })
          .catch(e => console.log("Error movies", e))
    })

module.exports = router;