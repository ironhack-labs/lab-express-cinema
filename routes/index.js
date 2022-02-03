const express = require('express');
const res = require('express/lib/response');
const MovieModel = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req,res)=> {
    console.log(MovieModel)
    MovieModel
    .find()
    .then(movies=> res.render('movies', {movies}))
    .catch(err => console.log(err))
})

router.get('/movies/:_id', (req,res)=>{
    const { _id } = req.params
    MovieModel
    .findById(_id)
    .then(movieFound=>{
        res.render('moviedetails', movieFound)
    })
    .catch(err=>console.log(err))
})

//si leeis esto:
// os quiero TA's
module.exports = router;
