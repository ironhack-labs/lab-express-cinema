const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
console.log('home')


/* GET movies page */
router.get('/movies', async (req, res)=>{
    
    try{
        const moviesDB = await Movie.find()
        res.render("movies.hbs", {moviesDB})
        console.log(moviesDB)
    }catch(err) {
        console.log("error")
    }
})


/* GET movie page */
router.route("/movie/:id", async (req, res) => {
    try{
        const movieId = await Movie.findById(req.params.id)
        res.render("movie-details.hbs", movieId)
    }catch(err) {
        console.log("error")
    }
});


module.exports = router;