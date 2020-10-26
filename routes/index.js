const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res, next)=>{
    const movies= await Movie.find();
    res.status(200).render('movies', {movies});
});

router.get('/movie/:id', async(req,res,next)=>{
    const selectedMovie= await Movie.findById(req.params.id);
    console.log(selectedMovie);
    res.status(200).render('movie', {selectedMovie})
})

module.exports = router;
