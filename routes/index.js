const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => 

{res.render('index')});



router.get('/movies',(req,res,next)=>{
    Movie.find()
    .then(movies =>{
        res.render('movies',{movies})
    })
    .catch((e)=> next(e))
})

module.exports = router;
