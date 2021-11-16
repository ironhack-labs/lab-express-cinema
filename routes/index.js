const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


/*movies*/
router.get("/movies", async (req,res)=>{
    try{
        const movies= await Movie.find({});
        res.render("movies",{movies});
    }catch(err){
console.log("err", err);
    }
});

module.exports = router;