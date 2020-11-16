const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */


router.get("/:id", (req,res,next)=> 
Movie.findById(req.params.id).then((idmovie)=>  
res.render("seeMore", {movie:idmovie}))
.catch(err => console.log('The error while searching artists occurred: ', err))
);

//router.get("/seeMore/:id",(req, res,next)=> 
module.exports = router;
