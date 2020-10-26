const { Router } = require('express');
const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.models')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies.hbs' , (req,res, next) => {
Movie.find()
.then((data) => {
    res.render('movies' , { movies : data})
    
}).catch((error) => {
    console.log('error ocurred during getting the books from db ' , error)
});
})



router.get('/movies/:id', (req, res, next) => {
    let movies = req.params.id
.then((movies) => {
res.render('movies' , {movies: movies})
}).catch((err) => {
    console.log(err)
})


})

module.exports = router;