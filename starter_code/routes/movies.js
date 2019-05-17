const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie')


router.get('/', (req, res, next) =>  {
  
    Movie.find()                                                         // ESTO ES EL MODELO
    .then(movie => {
      res.render('movies', { Movie: movie })
    })           // ESTO ES LA VISTA
    .catch(error => console.log(error))
  

})


// router.get('/view/movies', (req, res) => {

//   const id = req.params.book_id
//   Movie.findById(req.params.book_id)
//     .then(theBook => res.render('book-detail', { book: theBook }))
//     .catch(error => console.log(error))
// })




module.exports = router
