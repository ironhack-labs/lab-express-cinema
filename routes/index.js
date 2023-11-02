const express = require('express');
const router = express.Router();

const Movie = require ('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, ) => {
    res.render('index')
   //res.send('hola')

})

router.get('/movies', (req, res) =>{
    //res.send('listapelis')

    Movie
    .find()
    .then(movies => res.render('movies', { movies }))
    .catch(err=> console.log(err))
})

router.get('/movies/details/:id', (req,res) => {

    const {id} = req.params

    Movie
    .findById(id)
    .then(movies => res.render('details', {movies}))
    .catch(err => console.log(err))

})

  

module.exports = router;
