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



module.exports = router;
