/* const express = require('express');
const router = express.Router();
const Cinemas = require('../models/Movie.model')

router.get('/movie/:id', (req, res, next) => {
    const {id }= req.params
    Cinemas.find(id)
    .then(data => {
        res.render('one-movie', data)
    })
   
})


module.exports = router;
 
 */