const express = require('express');
const router = express.Router();
const Movies = require('../models/Movies')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res)=>{
     
    Movies.find({})
    .then((result)=>{
        /* console.log(result) */
        const movieArr = {movies:result}
        res.render(`movies`, movieArr)
    })
    .catch((error)=>{
    console.log(error)
    })
    
})

module.exports = router;
