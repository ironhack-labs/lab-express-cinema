const express = require('express');
const router = express.Router();

const Movies = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) =>
    res.render('index')
);

router.get('/movies', (req, res) => {

    Movies
        .find()
        .then(movie => res.render('movies/list', { movie }))
        .catch(err => console.log(err))

})

router.get('/movies/details/:movie_id', (req, res) => {

    const { movie_id } = req.params
    console.log('NO ARRIESGO =====>', movie_id)
  
    Movies
      .findById(movie_id)
      .then(theMovie => res.render('movies/details', theMovie))
      .catch(err => console.log(err))
  })
  



module.exports = router;
