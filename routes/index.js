const express = require('express');
const movieModel = require('../bin/models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", async(req,res)=>{
    const allMovies=await movieModel.find();
    res.render("movies.hbs", {allMovies})
  });

  router.get("/movie/:id", async(req,res)=>{
   try{
       const movie= await movieModel.findById(req.params.id);    
    res.render("oneMovie.hbs",{movie})
    }

catch(err){
    console.log(err)
}
  });



module.exports = router;
