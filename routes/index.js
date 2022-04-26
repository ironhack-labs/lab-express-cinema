const express = require('express');
const router = express.Router();
const movieModel = require("../models/Movie.model")
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get("/movies",(req,res)=>{
    movieModel.find()
    .then(movies=>{
        console.log(movies)
        res.render("movies",{movies})
    })
    .catch(error=>console.log(error))

})
router.get("/movie/:id",(req,res)=>{
    console.log(req.params.id)
    movieModel.findById(req.params.id)
    .then(movie=>{
        res.render("movie",{movie})
    })
    .catch(error=>console.log(error))
})

module.exports = router;
