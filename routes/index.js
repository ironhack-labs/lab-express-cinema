const express = require('express');
const router = express.Router();
const moviesModel = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get("/movies",(req, res)=>{
    moviesModel.find()
    .then(movies=>{
        console.log(movies)
        res.render("movies",{movies})
    })
    .catch(error=>console.log("error"))
    
})

router.get('/movie/:id',(req,res)=>{
    console.log(req.params.id)
    moviesModel.findById(req.params.id)
    .then(movie=>{
        console.log(movie)
        res.render("movie",{movie})
    })
    .catch(error=>console.log("error"))
})


module.exports = router;
