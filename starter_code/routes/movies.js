const express = require('express')
const router = express.Router()



const Film = require('../models/film')

router.get('/', (req, res, next) => {

                              // ESTO ES EL CONTROLADOR
    Film.find()                                                         // ESTO ES EL MODELO
    .then(allMovies => res.render('movies', {movies: allMovies }))  // ESTO ES LA VISTA
    .catch(error => console.log(error))

    
})







// router.get('/list', (req, res, next) => {                             // ESTO ES EL CONTROLADOR
//   Film.find()                                                         // ESTO ES EL MODELO
//     .then(films => res.render('movies', { movies: films }))          // ESTO ES LA VISTA
//     .catch(error => console.log(error))
// })





// router.get('/view/:film_id', (req, res) => {

//   //const id = req.params.book_id
//   Book.findById(req.params.book_id)
//     .then(theBook => res.render('book-detail', { book: theBook }))
//     .catch(error => console.log(error))
// })


module.exports = router