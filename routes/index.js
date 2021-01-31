const express = require('express');
<<<<<<< HEAD

=======
const Movie = require('../models/Movie.model');
>>>>>>> 370e97c0d323b40a5445e8b646d0a04cb6c09670
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => 

{res.render('index')});



router.get('/movies',(req,res,next)=>{
    Movie.find()
    .then(movies =>{
        res.render('movies',{movies})
    })
    .catch((e)=> next(e))
})

module.exports = router;
