const router = require ('express').Router()
const Movie = require ('../models/Movie')


router.get('/',(req,res)=>{
    Movie.find()
        .then(movies => {
            res.render('movies', {movies})
        })
        .catch(e =>{
            res.render('error')
        })
    
})

router.get('/:id', (req,res)=>{
    console.log(req.params.id)
    // const{id} = req.params.id
    Movie.findById(req.params.id)
    .then(movie =>{
        res.render('movie-detail', movie)
    }).catch(e =>res.send(e))
    })

// router.get('/movies', (req,res,netx)=>{
//     res.render('movies')
//   })


  module.exports = router

