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

// router.get('/seeMore/:id', (req,res)=>{
//     const{id} = req.params
//     Movie.findById(id)
//     .then(movies =>{
//         res.render('movies/seeMore', movies)
//     }).catch(e =>{
//         console.log(e)
//         res.render('error')
//     })
// })

router.get('/movies', (req,res,netx)=>{
    res.render('movies')
  })

  module.exports = router