const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie.model")


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

// GET movies page
router.get('/movies', (req, res)=>{

    Movie.find()
    .then((movies)=>{
        res.render('../views/movies', {movies})        
    })
    
})

router.get("/movies/:id", (req, res)=>{
    const { id } = req.params;
    Movie.findById(id)
      .then((movie) => {
        return res.render("../views/movie-details.hbs", { movie });
      })
      .catch((err) => {
        console.log(err);
      });
})

module.exports = router;
