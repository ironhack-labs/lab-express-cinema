const express = require('express');
const router  = express.Router();
const Movie = require ('../models/Movies')

router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies =>{
    console.log(movies)
    res.render('movies',{movies})
  })
  .catch(e=>next(e))
})

// router.get("/detail/:id",(req,res,next)=>{
//   const {id} = req.params
//   book.findById(id)
//   .then(book=>{
//   res.render("detail",book)
//   }).catch(e=>{
//     console.log(e)
//     next(e)
//   })
//  })
 
module.exports = router;
