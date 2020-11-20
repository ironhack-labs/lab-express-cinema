const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req,res,next)=>{
    Movies.find().then((movies)=>{
        res.render('movies',{movies})
    }).catch(err=>console.log(err))
})

router.get('/movies/:id',(req,res,next)=>{
    Movies.findById(req.params.id).then((movie)=>{
        res.render('movieInfo',{movie})
    }).catch(err=>console.log(err))
})

module.exports = router;
