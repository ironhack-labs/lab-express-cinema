const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((data) => {
        console.log('se han importado las peliculas', data)
        res.render('movies', data);
    })
    .catch((error) => console.log(error))

}) 
router.get('/movies/:id', (req, res, next) =>{
   const {id} = req.params
   console.log(id)
   Movie.findById(id).exec()
    .then((data) => {
        console.log('se ha importado la pelicula', data)
        res.render('movie', data);
    })
  })


module.exports = router;
