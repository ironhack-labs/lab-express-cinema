const express = require('express');
const router = express.Router();
const Movies = require('./../models/Movies.model')


/* GET home page */
router.get('/', (req, res) => res.render('index'));

router.get('/movies', (req, res) => {
    Movies
        .find()
        .then(movies => {
            res.render("movies-list", { movies })
        })
        .catch(err => console.log(err))

})
router.get('/movies/:movieId', (req, res) => {
        const { movieId } = req.params
        Movies
            .findById(movieId)
            .then(movies => {
                res.render('movie-description', { movies })
                console.log(movies)

            })
            .catch(err => console.log(err))

    })
    // router.get('/libros/detalles/:book_id', (req, res) => {

//     const { book_id } = req.params
//     Book
//         .findById(book_id)
//         .then(book => {
//             res.render('books/book-details', book)
//         })
//         .catch(err => console.log(err))
// })

module.exports = router;