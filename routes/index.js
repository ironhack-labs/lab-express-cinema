const express = require('express');
const router = express.Router();
const MovieModel = require("../models/Movie.model");


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get("/movies",async (req,res)=>{
  try{
    const movies= await  MovieModel.find();
    res.render("movies",{movies});
    }catch (err){
      console.log(err);
    }
});

router.get("/movies/:id", async (req, res) => {
  try{
    const { id}  = req.params;
    const movie = await MovieModel.findById(id);
    res.render("movie-details",  { movie});
    }catch (err){
      console.log(err);
    }
});

  module.exports = router;


