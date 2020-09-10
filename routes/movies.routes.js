const express = require('express')
const router = express.Router()
const Movie = require ('../models/Movie.model')

// Endpoints

router.get('/', (req, res) => {

    
Movie.find()
.then(movies=>res.render('movies',{movies}))
.catch(err => console.log('ERROR:', err))

})


router.get('/:id',(req,res)=>{
    
    const id=req.params.id
    Movie.findById(id)
    .then(movieDetails=>res.render('movie-details.hbs',movieDetails))
    })


module.exports = router