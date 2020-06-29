const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
    // get all the books from the database
    Movie.find().then((movies) => {
      // render a 'books' view with the books data
      res.render('movies', { movies: movies });
    }).catch(err => {
      console.log(err);
    })
  });
  
//   router.get('/books/:bookId', (req, res) => {
//     const bookId = req.params.bookId;
//     Book.findById(bookId).then(bookFromDatabase => {
//       res.render('bookDetails', { book: bookFromDatabase });
//     }).catch(err => {
//       console.log(err);
//     });
//   });


module.exports = router;
