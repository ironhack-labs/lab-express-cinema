const express = require('express');
const Movie = require('../models/movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


/* GET movies */
router.get('/movies',(req,res,next)=> {
    Movie.find()
    .then((mov=>{
        mov.forEach (movie => console.log(`movie added : ${movie.title}`))
        res.render('movies',{movies:mov})
    }))
    .catch(error => console.log( error))
});

router.get('/movies/:id',(req, res, next)=>{
    Movie.findById(req.params.id)
    .then(movie => {
        res.render('movie',{movie})
    })
    .catch(error => console.log( error))
})


module.exports = router;
