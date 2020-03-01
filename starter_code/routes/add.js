const express = require('express');
const router = express.Router();
const Movies = require('../models/Movies');

router.get('/', (req, res, next) => {
    res.render('add');
});


router.post('/', (req, res, next) => {
    console.log(res.body) ;
    res.render('list');
    //const { title, director, stars, image, description, showtimes } = req.body;
   // const newmovie = new Movie ({


   // })


});

module.exports = router;