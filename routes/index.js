const express = require('express');
const router = express.Router();
require('./seed/movies.seed')

const allMovies = require('../routes/models/movie.model')









/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {

  allMovies
    .find()
    .then(movie =>{
        console.log('pelicuak')
         res.render('movies', { movie })

    })
    .catch(err => console.log(err))

})



module.exports = router;
