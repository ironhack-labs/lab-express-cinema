const express = require('express');
const { create } = require('hbs');
const router = express.Router();

const Movie = require('./../models/Movie.model')

router.get('/', (req, res, next) => {
    res.render('index')

});


router.get('/movies', (req, res) => {
 
 Movie
    .find()
    .then(movies=> {
        res.render('movies',{movies})
      })
})


router.get('/movies/:id', (req, res) => {
 
   const { id } = req.params

   Movie
    .findById(id)
    .then(movies =>{
        res.render('id',movies)

        // res.send(movies)
        
    })

})


module.exports = router