const express = require('express');
const router = express.Router();
const movieModel = require("../models/Movie.model");


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res)=>{
    const moviesFromDB = await movieModel.find();
//  console.log("data Base information", moviesFromDB)
    res.render('movies', {moviesFromDB})
})

router.get('/movie/:id', async (req, res) =>{
    const {id} = req.params;
    const oneMovie = await movieModel.findById(id);
    // console.log("movie Id", oneMovie )
    res.render("movie-description", { oneMovie });
})
module.exports = router;
