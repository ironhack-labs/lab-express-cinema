const express = require('express');
const MovieModel = require('../models/Movie.model');
const router = express.Router();

router.get('/:id',(req,res,next) => {
    const {id} = req.params
    MovieModel.findById(id)
    .then(oneMovie => req.render('onemovie',{oneMovie}))
    .catch(err => console.log(err))
})

module.exports = router;