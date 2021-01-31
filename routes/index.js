const express = require('express');
const Movie = require('../models/movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
/* GET movies */
router.get('/movies',(req,res,next)=> {
    Movie.find()
    .then((movie=>{
        movie.forEach (mov => console.log(`movie added : ${mov.title}`))
        res.render('movies',{movies:mov})
    }))
    .catch(error => console.log(error))
});


module.exports = router;
