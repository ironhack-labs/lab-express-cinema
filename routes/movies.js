const express = require('express');
const MovieModel = require("./../models/Movie.models");
const router = express.Router();


router.get("/movies", async (req, res, next) =>{
    try{
        const movies = await MovieModel.find();
        res.render("movies", { movies });
    }
    catch(err){
        next(err);
    }
});
router.get("/movies/:id", async (req, res, next) =>{
    try{
        const movie = await MovieModel.findById(req.params.id);
        res.render("details", movie);
    }
    catch(err){
        next(err);
    }
})

module.exports = router;