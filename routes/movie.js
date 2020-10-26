const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model')


router.get('/', async (req, res, next) => {
    try{
        let all = await Movie.find()
          //console.log(all)
          res.render('movie/index', {all});
    }catch(err){
          console.log('Error while getting the celebrities from the DB: ', err);
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        let movie = await Movie.findById(req.params.id)
        console.log(movie)
          res.render('movie/show', {movie});
      }catch(err){
          console.log('Error while getting the celebrity: ', err);
      }
})

module.exports = router;