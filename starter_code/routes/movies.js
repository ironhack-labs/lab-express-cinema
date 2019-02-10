let router = require('express').Router();
let Movie = require('../models/Movie');


router.get('/:id', (req,res,next)=>{
    Movie.findById(req.params.id)
        .then(movie =>{
            res.render('detail',movie)
        })
        .catch(e=>next(e))

})


router.get('/', (req, res, next)=>{
    Movie.find()
        .then(movies=>{
            console.log(movies);
            res.render('movies', {movies})
        })
        .catch(e=>next(e))
});


module.exports = router;