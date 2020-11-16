const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */


router.get("/:id", (req,res,next)=> Movie.findById(req.params.id).then((idmovie)=> {console.log (idmovie), res.render("seeMore", {movie:idmovie})}));

//router.get("/seeMore/:id",(req, res,next)=> 
module.exports = router;
