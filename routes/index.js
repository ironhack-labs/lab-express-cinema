const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies',(req, res, next)=> {
    Movie.find()
        .then(data =>{
            /* console.log('the movies!!!!!!',data) */
            const moviesInfo = data
            res.render('movies',{moviesInfo})
        })
      

        .catch(err => console.error(err))})
  

router.get('/movie/:movieId',(req,res)=>{
    const movieID = req.params.movieId
    Movie.findById(movieID)
    .then(data=>{
        console.log(data)
        const movieInfo = data
        res.render('movie',{movieInfo})

    })

    .catch(err => console.error(err))

})

module.exports = router;
