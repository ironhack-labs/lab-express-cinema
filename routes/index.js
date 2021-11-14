const express = require('express');
const router = express.Router();
router.use(express.json())
const Movie = require('../models/Movie-model')



/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//router.route('/movies')
router.get("/movies" , async (req, res)=>{
    try{
        const data = await Movie.find()
        res.render("movies", {data})
        
    }
    catch(err) {
        console.log("error")
    }
})
router.get("/movies/:id" , async (req, res)=>{
    try{
        const id = req.params
        let thisMovie = await Movie.findById(id.id)
        console.log(thisMovie)

        res.render("movies/detail", thisMovie)
        
    }
    catch(err) {
        console.log(err)
    }
})
    

   
module.exports = router;
