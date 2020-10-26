const express = require('express');
const router = express.Router();
const Movie= require('../Models/Movie.model')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res, next)=>{
    const movies= await Movie.find();
    console.log(movies)
    res.status(200).render('movies', {movies});
});

router.get('/movie/:id', async(req,res,next)=>{
    const selectedMovie= await Movie.findById(req.params.id);
    console.log(selectedMovie);
    res.status(200).render('movie', {selectedMovie})
})

module.exports = router;