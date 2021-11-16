const express = require('express');
const router = express.Router();
const chalk = require('chalk')
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res) => {
    try{
        const movies = await Movie.find()
        console.log(movies)
        res.render('movies', {movies})
    } catch(err){
        console.log(chalk.bgRed(err))
    }
    
})

router.get('/movies/:id', async (req, res) => {
    try{
        const movie = await Movie.findById(req.params.id)
        res.render('moviesInfo',{movie})
    } catch(err){
        console.log(chalk.bgRed(err))
    }
    

})

module.exports = router;
