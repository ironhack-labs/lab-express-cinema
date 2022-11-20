const express = require('express');
const router = express.Router();
const Movies = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies',(req,res,next)=>{
    Movies.find()
    .then((moviefromDB)=>res.render('movies',{movie:moviefromDB}))
    .catch(error => next(error))
})

router.get('/movie/:id/detail',(req,res,next)=>{
    const {id} = req.params
    Movies.findById(id)
    .then((movieFromDb)=> res.render("movie-detail",{movie:movieFromDb}))
    .catch(error => next(error))
})

module.exports = router;
